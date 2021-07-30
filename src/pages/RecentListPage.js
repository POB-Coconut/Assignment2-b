import React, { Component } from "react";
import "./temp.css";

const storageData = JSON.parse(localStorage.getItem("data")) || [];

function getBrand(props) {
  const map = new Map();
  props.forEach((element) => {
    map.set(element.brand, true);
  });

  return map;
}

function getData(brand) {
  const data = storageData.filter((item) => {
    return brand.get(item.brand);
  });
  return data;
}

class RecentListPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data: storageData,
      brand: getBrand(storageData),
      tempData: [],
      priceToggle: true,
      recentToggle: true,
    };
  }
  handleClick(name) {
    this.state.brand.set(name, !this.state.brand.get(name));
    this.setState(() => {
      return { ...this.state, data: getData(this.state.brand) };
    });
  }

  onInterset(checked) {
    const { data, tempData } = this.state;
    if (checked) {
      this.setState({
        tempData: [...data],
        data: data.filter((v) => v.interest),
      });
    } else {
      this.setState({
        data: [...tempData],
      });
    }
    // this.setState(() => {
    //   return { ...this.state, data: getData(this.state.brand) };
    // });
    console.log(this.state, checked);
  }

  onSortCheap() {
    const { priceToggle, data } = this.state;

    if (priceToggle) {
      this.setState({
        priceToggle: !priceToggle,
        data: data.sort((a, b) => a.price - b.price),
      });
    } else {
      this.setState({
        priceToggle: !priceToggle,
        data: data.sort((a, b) => b.price - a.price),
      });
    }
  }

  onSortRecent() {
    const { recentToggle, data } = this.state;

    if (recentToggle) {
      this.setState({
        recentToggle: !recentToggle,
        data: data.sort((a, b) => new Date(a.date) - new Date(b.date)),
      });
    } else {
      this.setState({
        recentToggle: !recentToggle,
        data: data.sort((a, b) => new Date(b.date) - new Date(a.date)),
      });
    }
  }

  onShowDetail(interest) {
    // interest가 true면 관심 있는 것 -> 페이지 이동
    if (interest) {
      this.props.history.push("/");
    } else {
      // interest가 false면 관심 없음 -> alert('접근금지')
      alert("관심없는 제품입니다.");
    }
  }

  // componentDidMount() {
  //   localStorage.setItem(
  //     "data",
  //     JSON.stringify([
  //       {
  //         title: "거의새것 정품 구찌 보스턴백 토트백",
  //         brand: "구찌",
  //         price: 380000,
  //         interest: false,
  //         id: 1,
  //         date: new Date(2021, 6, 2),
  //       },
  //       {
  //         title: "중고 루이비통 장지갑 백화점 풀구성",
  //         brand: "루이비통",
  //         price: 400000,
  //         interest: true,
  //         id: 2,
  //         date: new Date(2021, 6, 3),
  //       },
  //       {
  //         title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
  //         brand: "스톤아일랜드",
  //         price: 350000,
  //         interest: false,
  //         id: 3,
  //         date: new Date(2021, 6, 1),
  //       },
  //       {
  //         title: "구찌 스트랩 클러치 판매합니다.",
  //         brand: "구찌",
  //         price: 30000,
  //         interest: true,
  //         id: 4,
  //         date: new Date(2021, 6, 6),
  //       },
  //     ])
  //   );
  // }

  render() {
    return (
      <div>
        <p>ProductPage</p>
        {Array.from(this.state.brand.entries()).map(([name, isChecked]) => (
          <div key={name}>
            <label>
              {name}
              <input
                type="checkbox"
                defaultChecked={isChecked}
                onChange={() => {
                  this.handleClick(name);
                }}
              />
            </label>
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
        <div className="data">
          {this.state.data.map((i) => (
            <ul key={i.id} onClick={() => this.onShowDetail(i.interest)}>
              <li>{i.title}</li>
              <li>{i.brand}</li>
              <li>{i.price}</li>
              <li>{i.id}</li>
              <li>{i.date}</li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default RecentListPage;
