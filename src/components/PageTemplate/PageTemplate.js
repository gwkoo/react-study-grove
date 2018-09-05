/**
 * 일정관리에 필요한 컴포넌트 들을 모아서 렌더링
 * 
 * 페이지의 Container, 타이틀, 콘텐츠 - 일정 등록 컴포넌트, 일정 리스트 컴포넌트 들을 렌더한다.
 */
import React, { Component } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// type1 class component
export default class PageTemplate extends Component {
    render() {
        /* this.props 를 보게 되면 children이 있다. 해당 부분은 자기 자신의 component의 사이에 있는 녀석들을 props에 보내준다. 
            ex) <PageTemplate> aaa </PageTemplate> 을 외부에서 사용시  
            {this.props.children} 으로 children 프로퍼티를 가져올 경우 aaa가 들어 있다.
        */
        console.log(this.props);
        return (
            <div className={cx('page-template')}>
                <h1>일정 관리</h1>
                <div className={cx('content')}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/*
// type2 functional component 
const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <h1>일정 관리</h1>
        <div className={cx('content')}>
            {children}
        </div>
    </div>
)
export default PageTemplate;
*/

/*
// type3 functional component 
const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <h1>일정 관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;
*/

/*
    type2 와 type3의 차이

    - type 2
    () => { 
        return(

        )
    }
    - type 3
    () => (

    )

    return 구간을 바로 작성하여서 축약 할수 있다.
    render return 만 사용시에는 type3이 간결하니 좋을것으로 판단된다.
*/