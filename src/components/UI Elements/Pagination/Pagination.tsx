import React, { FC, useState } from 'react';
import * as S from './StyledPagination';

interface PaginationProps {
    /** 한 페이지에 보여줄 아이템 개수 */
    postsPerPage: number;
    /** 총 아이템 개수 */
    totalPosts: any;
    /** 페이지 번호 변경 */
    paginate: () => void;
}

export const Pagination: FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate, ...props }) => {
    const [offset, setOffset] = useState<number>(0);
    const [active, setActive] = useState<number>(0);
    const postData = totalPosts.slice(offset, offset + postsPerPage);

    const handleUpOffset = () => setOffset(offset + 1);
    const handleDownOffset = () => setOffset(offset - 1);
    const handleActive = (index: number) => setActive(index);

    return (
        <S.PaginationWrapper index={offset > 0 ? active + 1 : active} {...props}>
            {offset > 0 && (
                <S.PaginationBox>
                    <S.PaginationItem aria-label="이전" onClick={handleDownOffset}>
                        &laquo;
                    </S.PaginationItem>
                </S.PaginationBox>
            )}

            {postData.map((mapData: any, index: any) => {
                return (
                    <S.PaginationBox key={index} active={active === index ? true : false}>
                        <S.PaginationItem
                            onClick={() => {
                                paginate();
                                handleActive(index);
                            }}
                        >
                            {mapData.id}
                        </S.PaginationItem>
                    </S.PaginationBox>
                );
            })}

            {offset < totalPosts.length - 1 && (
                <S.PaginationBox>
                    <S.PaginationItem aria-label="다음" onClick={handleUpOffset}>
                        &raquo;
                    </S.PaginationItem>
                </S.PaginationBox>
            )}
        </S.PaginationWrapper>
    );
};
