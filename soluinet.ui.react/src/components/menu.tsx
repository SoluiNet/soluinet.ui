import * as React from "react";
import { FaBars, FaCross } from "react-icons/fa";
import "menu.scss";

/**
 * The interface for the arguments of the Menu.
 * @interface
 */
interface MenuArguments
{
  /**
   * The ID.
   * @property {string} id The ID.
   */
  id?: string;

  /**
   * The value.
   * @property {string} value The value.
   */
  value?: string;

  /**
   * The icon.
   * @property {JSX.Element} icon The icon.
   */
  icon?: JSX.Element;
}

/**
 * The interface for the state of the Menu.
 * @interface
 */
interface MenuState
{
  /**
   * The value.
   * @property {string} value The value.
   */
  value?: string;
}

/**
 *
 */
class Menu extends React.Component<MenuArguments, MenuState>
{
  id: string;
  icon: JSX.Element;

  /**
   * Create an instance of Menu.
   * @class
   * @param {MenuArguments} props The properties.
   * @returns {Menu} A Menu component instance.
   */
  constructor(props: MenuArguments)
  {
    super(props);

    this.id = props.id ? props.id : `sn-menu-${Math.floor(Date.now() * Math.random()).toString()}`;
    this.icon = props.icon ? props.icon : <FaBars />;

    this.state = {
      value: props.value,
    };
  }

  /**
   * Handle a menu toggle.
   * @param {React.MouseEvent<HTMLButtonElement>} event The event.
   */
  toggleMenu(event: React.MouseEvent<HTMLButtonElement>)
  {
    (document.getElementById(this.id) as HTMLDivElement).classList.toggle("open");
  }

  /**
   * Render the component.
   * @returns {JSX.Element} The rendered labeled input.
   */
  render()
  {
    return (
      <div className="sn-menu" id={this.id}>
        <div className="overlay"></div>
        <button className="burger" onClick={this.toggleMenu}>
          <FaBars className="bars-icon" />
          <FaCross className="close-icon" />
        </button>
      </div>
    );
  }
}

export default Menu;