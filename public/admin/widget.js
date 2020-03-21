const { fromJS } = Immutable;

const Control = createClass({
  getInitialState: function() {
    return {
      options: []
    };
  },
  componentDidMount: async function() {
    const { loadEntry, field } = this.props;
    const collection = field.get("collection");
    const fieldName = field.get("target_field");
    const file = field.get("file");
    const results = await loadEntry(collection, file);
    const data = results.data[fieldName];
    const options = data.map(option => ({
      value: option,
      label: option
    }));
    this.setState({ options });
  },

  changeHandler: function(event) {
    const { onChange } = this.props;
    const { options } = this.state;
    const selectedValue = event.target.value;
    const selected = options.find(option => option.value === selectedValue);
    onChange(fromJS(selected));
  },

  getSelectedValue: function(value, options) {
    let selected = { value: "" };
    if (!value) return selected;
    const maybeOption = options.find(
      option => option.value === value.get("value")
    );
    if (maybeOption) {
      selected = maybeOption;
    }
    return selected;
  },

  render: function() {
    const {
      value,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle
    } = this.props;
    const { options } = this.state;
    const selected = this.getSelectedValue(value, options);

    const allOptions = options.slice();
    allOptions.unshift({
      value: "",
      label: "please select..."
    });

    return h(
      "select",
      {
        className: classNameWrapper,
        onFocus: setActiveStyle,
        onBlur: setInactiveStyle,
        name: "categories",
        onChange: this.changeHandler,
        id: forID
      },
      allOptions.map(option =>
        h(
          "option",
          {
            value: option.value,
            selected: option.value === selected.value
          },
          option.label
        )
      )
    );
  }
});

CMS.registerWidget("custom-file-relation", Control);
