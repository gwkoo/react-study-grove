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
        const {children} = this.props;

        return (
            <div className={cx('page-template')}>
                <h1>일정 관리</h1>
                <div className={cx('content')}>
                    {/* {this.props.children} 을 위처럼 render 영역에서 object로 받아서 사용할 수 있다. 뭐든 편한방식을 사용하면 된다. */}
                    {children}
                </div>
            </div>
        );
    }
}


/**
 * 함수형 컴포넌트로 사용 방법
 */

/*
 - type 1
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

 - type 2
const PageTemplate = ({children}) => (
    <div className={cx('page-template')}>
        <h1>일정 관리</h1>
        <div className={cx('content')}>
            {children}
        </div>
    </div>
)
export default PageTemplate;


위와 같이 상황에 따라서 return 영역(view) 만을 가지는 경우 축약 할수 있다.
type 1 : () => { return () }
type 2 : () => ()
*/