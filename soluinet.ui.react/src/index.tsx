import * as React from "react";
import ErrorHandling from "./behaviour/error-handling";
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

/**
 * The error handler.
 * @returns {ErrorHandling} The error handler.
 */
export const ErrorHandler = () => 
{
  return new ErrorHandling();
};