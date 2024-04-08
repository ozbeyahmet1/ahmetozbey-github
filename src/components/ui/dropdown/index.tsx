import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { IoIosClose } from "react-icons/io";
import { RxTriangleDown } from "react-icons/rx";
import { Sort, sortKeys } from "@/datas/sortKeys";
import { Assignee, Label, User } from "@/helpers/interfaces/api";
import { dataType } from "@/helpers/interfaces/common";
import styles from "./dropdown.module.scss";
import LineItem from "./lineItems";
import Input from "../input";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "transparent",
    border: "none",
    marginTop: theme.spacing(1),
    minWidth: 280,
  },
}));

export interface DropdownProps {
  hasInput: boolean;
  buttonText: string;
  users?: Array<User>;
  assignees?: Array<Assignee>;
  labels?: Array<Label>;
  type: dataType;
  sortKeys?: Array<Sort>;
}

/**
 * A dropdown component that allows filtering and selection of options.
 */
export default function Dropdown({ hasInput, buttonText, type, assignees, labels, users }: DropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /**
   * Handles the click event on the dropdown button.
   * @param event - The click event.
   */
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handles the close event of the dropdown.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles["dropdown"]}>
      <Button
        id="demo-customized-button"
        className={styles["dropdown_button"]}
        aria-controls={open ? "dropdown--customized" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<RxTriangleDown />}
      >
        {buttonText}
      </Button>

      <StyledMenu id="dropdown--customized" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem disableRipple className={styles["dropdown_menuItem--head"]}>
          <p>Filter by {type}</p>
          <IoIosClose onClick={handleClose} size={20} />
        </MenuItem>
        {hasInput && (
          <MenuItem disableRipple className={styles["dropdown_menuItem--head"]}>
            <Input
              type="text"
              placeholder={`Search for ${type}s`}
              name="search"
              onChange={() => { }}
              value={""}
              className={styles["dropdown_input"]}
            />
          </MenuItem>
        )}
        <div className={styles["dropdown_items"]}>
          {type == "label" &&
            labels?.map((label, i) => {
              return <LineItem type="label" key={i} labelProps={label} />;
            })}
          {type == "assignee" &&
            assignees?.map((assignee, i) => {
              return <LineItem type="assignee" key={i} assigneeProps={assignee} />;
            })}
          {type == "sort" &&
            sortKeys.map((item, i) => {
              return <LineItem type="sort" key={i} sortProps={{ id: i, name: item.name, key: item.key }} />;
            })}
        </div>
      </StyledMenu>
    </div>
  );
}
