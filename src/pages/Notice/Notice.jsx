import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from './Style';
import { FaPlus, FaMinus } from "react-icons/fa";

function Notice() {
    const noticeData = [
        {
            title: "서비스 점검 안내",
            date: "2024-12-20",
            content: "서비스 점검이 2024년 12월 25일 오전 2시부터 오전 5시까지 진행됩니다. 이용에 불편을 드려 죄송합니다."
        },
        {
            title: "신규 기능 업데이트",
            date: "2024-12-18",
            content: "신규 기능인 '어디모임 추천'이 추가되었습니다. 많은 이용 부탁드립니다."
        },
        {
            title: "정기 점검 완료",
            date: "2024-12-15",
            content: "정기 점검이 성공적으로 완료되었습니다. 안정적인 서비스를 위해 노력하겠습니다."
        },
        {
            title: "크리스마스 이벤트",
            date: "2024-12-10",
            content: "크리스마스를 맞이하여 다양한 이벤트를 준비했습니다. 참여하시고 특별한 혜택을 누리세요!"
        }
    ];

    const [openIndexes, setOpenIndexes] = useState([]); // 열려 있는 공지사항들의 index를 관리

    const toggleContent = (index) => {
        if (openIndexes.includes(index)) {
            // 이미 열려 있는 경우 닫기
            setOpenIndexes(openIndexes.filter((i) => i !== index));
        } else {
            // 닫혀 있는 경우 열기
            setOpenIndexes([...openIndexes, index]);
        }
    };

    return (
        <div css={S.SLayout}>
            <div css={S.Container}>
                <h2 css={S.Title}>공지사항</h2>
                <ul css={S.NoticeList}>
                    {noticeData.map((notice, index) => (
                        <li key={index} css={S.NoticeItem}>
                            <div css={S.NoticeHeader}>
                                <span css={S.NoticeTitle}>{notice.title}</span>
                                <span css={S.NoticeDate}>{notice.date}</span>
                                <button css={S.ToggleButton} onClick={() => toggleContent(index)}>
                                    {openIndexes.includes(index) ? <FaMinus /> : <FaPlus />}
                                </button>
                            </div>
                            {openIndexes.includes(index) && (
                                <div css={S.NoticeContent}>
                                    {notice.content}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Notice;
