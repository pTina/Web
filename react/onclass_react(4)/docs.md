
[2025-05-14(수)]

### create-react-app CSS

1. 1개의 CSS 파일 만들기 > index.js에 해당 css파일 임포트하기
2. style prop 이용하기
3. CSS 모듈
    
    css 코드를 javascript 객체로 변환시켜서 styles.btn 이런식으로 사용할 수 있게 해줌
    
    Button.module.css - .btn{ ~ }
    
    Button.js
    
    import styles from ‘Button.modules.css’ 
    
    <button className={`styles.btn`} ></button>
    
    ⇒ 실제 렌더링하면? 클래스네임은 랜덤으로 지정됨

### useEffect

컴포넌트가 렌더링된 다음에 실행되는 코드

언제 호출될지 조건을 정할 수 있음

| `useEffect(() => { ... })` | 상태가 바뀔 때마다 실행 |
| --- | --- |
| `useEffect(() => { ... }, [])` | 처음 한 번만 실행 |
| `useEffect(() => { ... }, [x])` | x가 바뀔 때만 실행
x는 변수를 의미함 |
