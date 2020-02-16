import React from "react";

class FilterToggleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(e, index) {
    this.props.handleFilterToggled(
      this.props.filter_status_id,
      e.target.name,
      index
    );
  }

  render() {
    const checked_classes = this.props.checked_className
      ? this.props.checked_classes
      : "bg-blue-500 hover:bg-blue-700 text-white";

    const unchecked_classes = "bg-gray-500 hover:bg-blue-700 text-gray-200";
    return (
      <div class="my-2">
        {this.props.filters.map((v, i) => {
          return (
            <button
              key={i}
              name={v.label}
              className={
                (this.props.filter_status[v.label].checked ? checked_classes : unchecked_classes) +
                " py-1 px-2 first:ml-0 ml-1 font-bold first:rounded-l-full last:rounded-r-full border border-gray-300"
              }
              onClick={e => this.handleClicked(e, i)}
            >
              {v.label}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FilterToggleGroup;
