import { LabIcon } from '@jupyterlab/ui-components';
import * as React from 'react';
import { classes } from 'typestyle';
import { actionButtonStyle } from '../style/ActionButtonStyle';
import { Button, Tooltip } from '@jupyter/react-components';

/**
 * Action button properties interface
 */
export interface IActionButtonProps {
  /**
   * Customize class name
   */
  className?: string;
  /**
   * Is disabled?
   */
  disabled?: boolean;
  /**
   * Icon
   */
  icon: LabIcon;
  /**
   * Button title
   */
  title: string;
  /**
   * On-click event handler
   */
  onClick?: (event?: React.MouseEvent) => void;
}

/**
 * Action button component
 *
 * @param props Component properties
 */
export const ActionButton: React.FunctionComponent<IActionButtonProps> = (
  props: IActionButtonProps
) => {
  const { disabled, className, title, onClick, icon } = props;
  return (
    <>
      <Tooltip anchor={title}>{title}</Tooltip>
      <Button
        id={title}
        className={classes(actionButtonStyle, className)}
        disabled={disabled}
        onClick={onClick}
      >
        <icon.react elementPosition="center" tag="span" />
      </Button>
    </>
  );
};
