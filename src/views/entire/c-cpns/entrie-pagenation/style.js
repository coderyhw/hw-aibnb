import styled from "styled-components";

export const PageNationWrapper = styled.div`
  display:flex;
  justify-content:center;
  .info{
    display:flex;
    flex-direction:column;
    align-items:center;
    .desc{
      margin-top:16px;
    }
    .ant-pagination{
      .ant-pagination-item{
        margin: 0 9px;
        border-radius:50%;


        &.ant-pagination-item-active{
          background-color:#222;
          border:1px solid #222;
          a{
            color:#fff;
          }
        }
        &:hover{
          text-decoration:underline;
        }
      }
    }
  }
`