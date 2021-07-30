import React, { Component } from "react";

class RecentListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentData: JSON.parse(localStorage.getItem("data")),
      tempData: [],
      priceToggle: true,
      recentToggle: true,
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

  onSortCheap() {
    const { priceToggle, recentData } = this.state;

    if (priceToggle) {
      this.setState({
        priceToggle: !priceToggle,
        recentData: recentData.sort((a, b) => a.price - b.price),
      });
    } else {
      this.setState({
        priceToggle: !priceToggle,
        recentData: recentData.sort((a, b) => b.price - a.price),
      });
    }
  }

  onSortRecent() {
    const { recentToggle, recentData } = this.state;

    if (recentToggle) {
      this.setState({
        recentToggle: !recentToggle,
        recentData: recentData.sort((a, b) => a.date - b.date),
      });
    } else {
      this.setState({
        recentToggle: !recentToggle,
        recentData: recentData.sort((a, b) => b.date - a.date),
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
        <button onClick={() => this.onSortRecent()}>최근 조회 순</button>
        <button onClick={() => this.onSortCheap()}>가격 낮은 순</button>
      </div>
    );
  }
}

export default RecentListPage;
