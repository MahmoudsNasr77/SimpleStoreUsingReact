import React, { useState } from 'react';
class CounterClass  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tasbeeh: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
    };
  }

    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));    
        if (this.state.count === 33) {
            this.setState({ tasbeeh: "سبحان الله" });
        } else if (this.state.count === 66) {
            this.setState({ tasbeeh: "الحمد لله" });
        } else if (this.state.count === 99) {
            this.setState({ tasbeeh: "لا إله إلا الله" });
        } else if (this.state.count === 100) {
            this.setState({ tasbeeh: "الله أكبر" });
        } else if (this.state.count === 101) {
            alert("تسبيحك مكتمل");
            this.setState({ tasbeeh: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر", count: 0 });
        }   
    }


  render() {
    return (
        <div>
            <h1>تسبيحة</h1>
            <h2>{this.state.tasbeeh}</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.handleClick}>زد</button>
        </div>
    );
  }
}
export default CounterClass;