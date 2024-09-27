function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
  }
  return arr;
}

// 최솟값의 인덱스를 찾고 해당 값을 제거하는 방식을 사용했습니다.
