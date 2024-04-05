import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { IoIosClose } from "react-icons/io";
import { RxTriangleDown } from "react-icons/rx";
import { Sort } from "@/datas/sortKeys";
import { Label } from "@/helpers/interfaces/label";
import { User, dataType } from "@/helpers/interfaces/user";
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
  data: Array<User | Label | Sort>;
  type: dataType;
}
export default function Dropdown({ hasInput, buttonText, data, type }: DropdownProps) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
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
        endIcon={<RxTriangleDown />}>
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
              error={false}
              name="search"
              onChange={() => { }}
              value={""}
              className={styles["dropdown_input"]}
            />
          </MenuItem>
        )}
        <div className={styles["dropdown_items"]}>
          {(data as Array<User>).map((user, i) => {
            return <LineItem type={type} key={i} authorProps={{ imageSrc: user.avatar_url, username: user.login }} />;
          })}
          {(data as Array<Label>).map((label, i) => {
            return <LineItem type={type} key={i} labelProps={{ color: label.color, name: label.name }} />;
          })}
          {type == "assignee" && (data as Array<User>).map((user, i) => {
            return <LineItem type={type} key={i} authorProps={{ imageSrc: user.avatar_url, username: user.login }} />;
          })}
          {type == "sort" && (data as Array<Sort>).map((item, i) => {
            return <LineItem type={type} key={i} sortProps={{ id: i, name: item.name }} />;
          })}
        </div>
      </StyledMenu>
    </div>
  );
}
