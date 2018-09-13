import React,{Component} from 'react';
import SummaryStore from '../Store/SummaryStore';
class Summary extends Component{
  constructor(props){
    super(props);
    this.state = {
      sum:SummaryStore.getSummary(),
    };

    this.onUpdate = this.onUpdate.bind(this);
  }


  componentDidMount(){
    SummaryStore.addChangeListener(this.onUpdate);
  }
  componentWillUnmount(){
    SummaryStore.removeChangeListener(this.onUpdate);
  }

  onUpdate(){
    this.setState({
      sum:SummaryStore.getSummary()
    });
  }

  render(){
    return (
      <div>
        <h5>三个子组件的总和：{this.state.sum}</h5>
      </div>
    );
  }
}

export default Summary;