import * as React from "react";
import { FaBars, FaCross } from "react-icons/fa";
import "menu.scss";

/**
 * The interface for the arguments of the Card.
 * @interface
 */
interface CardArguments
{
  billingPeriod?: string;

  currencySymbol?: string;

  hasPrice?: boolean;

  heading?: string;

  /**
   * The icon.
   * @property {JSX.Element} icon The icon.
   */
  icon?: JSX.Element;

  /**
   * The ID.
   * @property {string} id The ID.
   */
  id?: string;

  priceAmount?: number;

  /**
   * A value indicating whether the card is the primary card or not.
   * @property {boolean} primary A value indicating whether the card is the primary card or not.
   */
  primary?: boolean;

  /**
   * The value.
   * @property {string} value The value.
   */
  value?: string;
}

/**
 * The interface for the state of the Card.
 * @interface
 */
interface CardState
{
  /**
   * The value.
   * @property {string} value The value.
   */
  value?: string;
}

/**
 * The card.
 */
class Card extends React.Component<CardArguments, CardState>
{
  billingPeriod: string;
  currencySymbol: string;
  hasPrice: boolean;
  heading: string;
  id: string;
  icon: JSX.Element;
  priceAmount: number;
  primary: boolean;

  /**
   * Create an instance of Card.
   * @class
   * @param {CardArguments} props The properties.
   * @returns {Card} A Card component instance.
   */
  constructor(props: CardArguments)
  {
    super(props);

    this.billingPeriod = props.billingPeriod ? props.billingPeriod : "month";
    this.currencySymbol = props.currencySymbol ? props.currencySymbol : "€";
    this.hasPrice = props.hasPrice ? props.hasPrice : false;
    this.heading = props.heading ? props.heading : "";
    this.id = props.id ? props.id : `sn-card-${Math.floor(Date.now() * Math.random()).toString()}`;
    this.icon = props.icon ? props.icon : <FaBars />;
    this.primary = props.primary ? props.primary : false;

    this.state = {
      value: props.value,
    };
  }

  /**
   * Handle a menu toggle.
   * @param {React.MouseEvent<HTMLButtonElement>} _event The event.
   */
  toggleMenu(_event: React.MouseEvent<HTMLButtonElement>)
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
      <div className="sn-card" id={this.id}>
        <div className="background" />
        <article className={`card${this.primary ? " primary" : ""}`}>
          <h2>{this.heading}</h2>
          {this.hasPrice && (
            <var>
              <abbr>{this.currencySymbol}</abbr> {this.priceAmount}
              {this.billingPeriod && <small>/{this.billingPeriod}</small>}
            </var>
          )}
          <button className="burger" onClick={this.toggleMenu}>
            <FaBars className="bars-icon" />
            <FaCross className="close-icon" />
          </button>
        </article>
      </div>
    );
  }
}

export default Menu;