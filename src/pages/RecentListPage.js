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
      recentData: JSON.parse(localStorage.getItem("data")),
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

  componentDidMount() {
    /*
    localStorage.setItem(
      "data",
      JSON.stringify([
        {
          title: "거의새것 정품 구찌 보스턴백 토트백",
          brand: "구찌",
          price: 380000,
          interest: false,
          id: 1,
          date: [new Date(2021, 6, 2)],
        },
        {
          title: "중고 루이비통 장지갑 백화점 풀구성",
          brand: "루이비통",
          price: 400000,
          interest: false,
          id: 2,
          date: [new Date(2021, 6, 3)],
        },
        {
          title: "중고 스톤아일랜드 쉐도우와팬 봄니트 95",
          brand: "스톤아일랜드",
          price: 350000,
          interest: false,
          id: 3,
          date: [new Date(2021, 6, 1)],
        },
        {
          title: "구찌 스트랩 클러치 판매합니다.",
          brand: "구찌",
          price: 30000,
          interest: false,
          id: 4,
          date: [new Date(2021, 6, 6)],
        },
      ])
    );
    let data = localStorage.getItem("data");
    */
    // console.log(getData(this.state));
  }

  render() {
    const { recentData } = this.state;
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
            <ul key={i.id}>
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
