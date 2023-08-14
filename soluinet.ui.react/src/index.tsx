import * as React from "react";
import InputWithLabel from "./components/labeled-input";
import MenuComponent from "./components/menu";
import "root.scss";

/**
 * The labeled input.
 * @returns {InputWithLabel} The labeled input.
 */
export const LabeledInput = () => 
{
  return <InputWithLabel></InputWithLabel>;
};

/**
 * The menu.
 * @returns {MenuComponent} The menu.
 */
export const Menu = () => 
{
  return <MenuComponent></MenuComponent>;
};