import React, { Component } from "react";

class RecentListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentData: JSON.parse(localStorage.getItem("data")),
      tempData: [],
    };
  }

  onInterset(checked) {
    const { recentData, tempData } = this.state;
    // checked === true면 관심 없는 체크박스를 체크한 것
    if (checked) {
      this.setState({
        tempData: [...recentData],
        recentData: recentData.filter((data) => !data.interest),
      });
    } else {
      this.setState({
        recentData: [...tempData],
      });
    }
  }

  render() {
    const { recentData } = this.state;
    return (
      <div>
        <p>RecentListPage</p>
        {recentData.map((data) => (
          <div key={data.id}>
            <p>id : {data.id}</p>
            <p> title : {data.title}</p>
            <p> brand : {data.brand}</p>
            <p> price : {data.price}</p>
            <p> interest : {data.interest}</p>
          </div>
        ))}
        <label htmlFor="check interest">관심 없는 상품 제거하기</label>
        <input
          type="checkbox"
          id="check interest"
          onChange={(e) => this.onInterset(e.target.checked)}
        />
      </div>
    );
  }
}

export default RecentListPage;
