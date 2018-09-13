import React,{Component} from 'react';
import * as Actions from '../Action/Actions';
import CounterStore from '../Store/CounterStore';

const buttonStyle={
  margin:'10px'
};
class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:CounterStore.getCounterValues()[props.caption],
    }

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  //提升性能，通过比较props与state来确定是否更新子组件
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }

  componentDidMount(){
    CounterStore.addChangeListener(this.onchange);
  }
  componentWillUnmount(){
    CounterStore.removeChangeListener(this.onchange);
  }

  onchange(){
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({
      count:newCount
    });
  }


  // 用户触发点击事件，发送点击事件给Action
  onClickIncrementButton(){
    Actions.increment(this.props.caption);
  }

  // 用户触发点击事件，发送点击事件给Action
  onClickDecrementButton(){
    Actions.decrement(this.props.caption);
  }

  render(){
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption}的结果：{this.state.count}</span>
      </div>
    );
  }
}

export default Counter;