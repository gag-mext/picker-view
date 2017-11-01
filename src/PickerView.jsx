import React from 'react';
import '../style';
import Cascader from 'rmc-cascader/lib/Cascader';
import MultiPicker from 'rmc-picker/lib/MultiPicker.web';

function getDefaultProps() {
  return {
    prefixCls: 'am-picker',
    pickerPrefixCls: 'am-picker-col',
    cols: 3,
    cascade: true,
    value: [],
    onChange() {
    },
  };
}

export default class PickerView extends React.Component<IPickerView, any> {
  static defaultProps = getDefaultProps();

  render() {
    const { props } = this;
    let picker;
    if (props.cascade) {
      picker = (
        <Cascader
          prefixCls={props.prefixCls}
          pickerPrefixCls={props.pickerPrefixCls}
          data={props.data}
          value={props.value}
          onChange={props.onChange}
          cols={props.cols}
        />
      );
    } else {
      picker = (
        <MultiPicker
          prefixCls={props.prefixCls}
          selectedValue={props.value}
          onValueChange={props.onChange}
          pickerPrefixCls={props.pickerPrefixCls}
        >
          {props.data.map(children => { return { props: { children } }; })}
        </MultiPicker>
      );
    }
    return picker;
  }
}
PickerView.defaultProps = getDefaultProps();
PickerView.propTypes = {
  prefixCls: React.PropTypes.string,
  pickerPrefixCls: React.PropTypes.string,
  cols: React.PropTypes.number,
  cascade:React.PropTypes.bool,
  value:React.PropTypes.array,
  data: React.PropTypes.any,
  styles: React.PropTypes.any,
  onChange:React.PropTypes.func
};
PickerView.displayName = "PickerView";
module.exports=PickerView;
