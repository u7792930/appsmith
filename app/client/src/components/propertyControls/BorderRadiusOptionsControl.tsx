import * as React from "react";

import type { ControlData, ControlProps } from "./BaseControl";
import BaseControl from "./BaseControl";
import { borderRadiusOptions } from "constants/ThemeConstants";
import type { DSEventDetail } from "utils/AppsmithUtils";
import { SegmentedControl, Tooltip } from "@appsmith/ads";
import {
  DSEventTypes,
  DS_EVENT,
  emitInteractionAnalyticsEvent,
} from "utils/AppsmithUtils";

export interface BorderRadiusOptionsControlProps extends ControlProps {
  propertyValue: string | undefined;
}

const options = Object.keys(borderRadiusOptions).map((optionKey) => ({
  label: (
    <Tooltip content={optionKey} key={optionKey}>
      <div
        className="w-5 h-5 border-t-2 border-l-2"
        style={{
          borderColor: "var(--ads-v2-color-fg)",
          borderTopLeftRadius: borderRadiusOptions[optionKey],
        }}
      />
    </Tooltip>
  ),
  value: borderRadiusOptions[optionKey],
}));

const optionsValues = new Set(Object.values(borderRadiusOptions));

class BorderRadiusOptionsControl extends BaseControl<BorderRadiusOptionsControlProps> {
  componentRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.componentRef.current?.addEventListener(
      DS_EVENT,
      this.handleAdsEvent as (arg0: Event) => void,
    );
  }

  componentWillUnmount() {
    this.componentRef.current?.removeEventListener(
      DS_EVENT,
      this.handleAdsEvent as (arg0: Event) => void,
    );
  }

  handleAdsEvent = (e: CustomEvent<DSEventDetail>) => {
    if (
      e.detail.component === "ButtonGroup" &&
      e.detail.event === DSEventTypes.KEYPRESS
    ) {
      emitInteractionAnalyticsEvent(this.componentRef.current, {
        key: e.detail.meta.key,
      });
      e.stopPropagation();
    }
  };

  static getControlType() {
    return "BORDER_RADIUS_OPTIONS";
  }

  public render() {
    // IMPORTANT: Using propertyValue instead of evaluatedValue ensures this is a controlled component
    // that always reflects the current widget property state. This is critical for nested properties
    // like submitButtonStyles.borderRadius in JSONForm widget to update the UI when property changes.
    // evaluatedValue may not trigger rerenders for nested properties, causing the selector to show
    // stale values even when the widget updates correctly.
    return (
      <SegmentedControl
        isFullWidth={false}
        onChange={(value, isUpdatedViaKeyboard = false) => {
          this.updateProperty(
            this.props.propertyName,
            value,
            isUpdatedViaKeyboard,
          );
        }}
        options={options}
        ref={this.componentRef}
        value={this.props.propertyValue || ""}
      />
    );
  }

  // TODO: Fix this the next time the file is edited
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static canDisplayValueInUI(config: ControlData, value: any): boolean {
    return optionsValues.has(value);
  }
}

export default BorderRadiusOptionsControl;
