# 서술과제

 </br>

## 문제1

> React는 불변성을 유지해주는게 공식문서에서도 강조가 되고 있는데, 불변성을 유지시켜주기 위해서는 원본을 수정해서는 안된다. 하지만 제시된 코드는 list에 index로 접근하여 원본을 수정하고 있기 때문에 내부 값을 수정했을지라도 레퍼런스가 가리키는 곳이 같아 똑같은 값으로 인식되어 렌더링이 일어나지않는다. </br>
> 두번째로는 forEach로 렌더링 하고 있는데 map을 사용하여 새로운 배열을 반환시켜 원본과 비교해서 렌더링을 시켜야한다.
> </br>

## 문제2

> forEach는 결과값을 반환하지 않고 함수 안에서 연산만 하는것이다. map은 결과값을 새로운 배열로 반환해준다. 따라서 이 코드는 아무것도 출력되지 않는다.
