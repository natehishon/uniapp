import React from "react"
import PropTypes from "prop-types"
class Catalog extends React.Component {
  render () {
    return (
      <React.Fragment>

        <nav className="panel">
          <p className="panel-heading">
            Course List
          </p>
          <div className="panel-block">
            <p className="control has-icons-left">
                <input className="input is-small" type="text" placeholder="search"></input>
      <span className="icon is-small is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
            </p>
          </div>
          <p className="panel-tabs">

            <a className="is-active">Subjects</a>
            <a>Locations</a>
            <a>Terms</a>
            <a>Days Of Week</a>
          </p>
          <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
            Scaring
          </a>
          <a className="panel-block">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
            Scream Canister Design
          </a>
          <a className="panel-block">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
            Risk Management
          </a>
          <a className="panel-block">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
            Spooky Physics
          </a>
          <a className="panel-block">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
            Monster History
          </a>
          <a className="panel-block">
    <span className="panel-icon">
      <i className="" aria-hidden="true"></i>
    </span>
              Liberal Arts & Monstrosities
          </a>
          <div className="panel-block">
            <button className="button is-link is-outlined is-fullwidth">
              reset all filters
            </button>
          </div>
        </nav>


        {/*<div className="my-catalog-component">*/}
          {/*<section className="ac-container">*/}
            {/*<div>*/}
              {/*<input id="ac-1" name="accordion-1" type="checkbox"/>*/}
              {/*<label htmlFor="ac-1">Scaring</label>*/}
              {/*<article className="ac-small">*/}
                {/*Course 1*/}
                {/*Course 2*/}
              {/*</article>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<input id="ac-2" name="accordion-1" type="checkbox"/>*/}
              {/*<label htmlFor="ac-2">How we work</label>*/}
              {/*<article className="ac-medium">*/}
                {/*<p>Some content... </p>*/}
              {/*</article>*/}
            {/*</div>*/}

          {/*</section>*/}

        {/*</div>*/}

      </React.Fragment>
    );
  }
}

Catalog.propTypes = {
  major: PropTypes.string
};
export default Catalog
