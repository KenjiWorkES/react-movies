import React from 'react';
import './styles.scss';

const Svg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="svg">
      <defs>
        <symbol id="all">
          <title>All Movies</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z"
          />
        </symbol>

        <symbol id="movies">
          <title>Movies</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.9556 0H3.04444C1.36304 0 0 1.36304 0 3.04444V16.9556C0 18.637 1.36304 20 3.04444 20H16.9556C17.763 20 18.5374 19.6792 19.1083 19.1083C19.6792 18.5374 20 17.763 20 16.9556V3.04444C20 2.23701 19.6792 1.46264 19.1083 0.891697C18.5374 0.320753 17.763 0 16.9556 0ZM4 9H2V7H4V9ZM4 11H2V13H4V11ZM18 9H16V7H18V9ZM18 11H16V13H18V11ZM18 2.74V4H16V2H17.26C17.4563 2 17.6445 2.07796 17.7833 2.21674C17.922 2.35552 18 2.54374 18 2.74ZM4 2H2.74C2.54374 2 2.35552 2.07796 2.21674 2.21674C2.07796 2.35552 2 2.54374 2 2.74V4H4V2ZM2 17.26V16H4V18H2.74C2.54374 18 2.35552 17.922 2.21674 17.7833C2.07796 17.6445 2 17.4563 2 17.26ZM17.26 18C17.6687 18 18 17.6687 18 17.26V16H16V18H17.26Z"
          />
        </symbol>

        <symbol id="movies10">
          <title>Movies10</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.47778 0H1.52222C0.681522 0 0 0.681522 0 1.52222V8.47778C0 9.31848 0.681522 10 1.52222 10H8.47778C8.8815 10 9.26868 9.83962 9.55415 9.55415C9.83962 9.26868 10 8.8815 10 8.47778V1.52222C10 1.1185 9.83962 0.731321 9.55415 0.445849C9.26868 0.160377 8.8815 0 8.47778 0ZM2 4.5H1V3.5H2V4.5ZM2 5.5H1V6.5H2V5.5ZM9 4.5H8V3.5H9V4.5ZM9 5.5H8V6.5H9V5.5ZM9 1.37V2H8V1H8.63C8.72813 1 8.82224 1.03898 8.89163 1.10837C8.96102 1.17776 9 1.27187 9 1.37ZM2 1H1.37C1.27187 1 1.17776 1.03898 1.10837 1.10837C1.03898 1.17776 1 1.27187 1 1.37V2H2V1ZM1 8.63V8H2V9H1.37C1.27187 9 1.17776 8.96102 1.10837 8.89163C1.03898 8.82224 1 8.72813 1 8.63ZM8.63 9C8.83435 9 9 8.83435 9 8.63V8H8V9H8.63Z"
          />
        </symbol>

        <symbol id="tv">
          <title>Tvs</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
          />
        </symbol>

        <symbol id="tv10">
          <title>Tvs10</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.54 2.24054H10V10H0V2.24054H2.46L1.11 0.601358L1.89 0.014549L3.5 1.95441L5.11 0L5.89 0.601358L4.54 2.24054ZM1 3.21048V9.03007H6V3.21048H1ZM8.5 7.0902H7.5V6.12027H8.5V7.0902ZM7.5 5.15034H8.5V4.18041H7.5V5.15034Z"
          />
        </symbol>

        <symbol id="bookmark">
          <title>Bookmark</title>
          <path d="M15.3866 0C15.5893 0 15.7832 0.0396563 15.9683 0.118969C16.2591 0.233532 16.4904 0.414188 16.6623 0.660939C16.8341 0.907689 16.92 1.18088 16.92 1.4805V18.5195C16.92 18.8191 16.8341 19.0923 16.6623 19.3391C16.4904 19.5858 16.2591 19.7665 15.9683 19.881C15.8008 19.9515 15.607 19.9868 15.3866 19.9868C14.9636 19.9868 14.5979 19.8458 14.2895 19.5638L8.46001 13.959L2.63054 19.5638C2.31328 19.8546 1.94757 20 1.53338 20C1.33069 20 1.13681 19.9603 0.951751 19.881C0.660939 19.7665 0.42961 19.5858 0.257766 19.3391C0.085922 19.0923 0 18.8191 0 18.5195V1.4805C0 1.18088 0.085922 0.907689 0.257766 0.660939C0.42961 0.414188 0.660939 0.233532 0.951751 0.118969C1.13681 0.0396563 1.33069 0 1.53338 0H15.3866Z" />
        </symbol>

        <symbol id="bookmark10">
          <title>Bookmark</title>
          <path d="M10.6094 0C10.7491 0 10.8828 0.0277594 11.0104 0.0832783C11.2109 0.163472 11.3704 0.289932 11.4889 0.462657C11.6074 0.635382 11.6667 0.826614 11.6667 1.03635V12.9636C11.6667 13.1734 11.6074 13.3646 11.4889 13.5373C11.3704 13.7101 11.2109 13.8365 11.0104 13.9167C10.895 13.9661 10.7613 13.9907 10.6094 13.9907C10.3177 13.9907 10.0655 13.892 9.85286 13.6946L5.83333 9.77132L1.8138 13.6946C1.59505 13.8982 1.34288 14 1.05729 14C0.917535 14 0.783854 13.9722 0.65625 13.9167C0.455729 13.8365 0.296224 13.7101 0.177734 13.5373C0.0592448 13.3646 0 13.1734 0 12.9636V1.03635C0 0.826614 0.0592448 0.635382 0.177734 0.462657C0.296224 0.289932 0.455729 0.163472 0.65625 0.0832783C0.783854 0.0277594 0.917535 0 1.05729 0H10.6094Z" />
        </symbol>

        <symbol id="search">
          <title>Search</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.08 21.2L27.6133 25.72C27.8657 25.9704 28.0077 26.3111 28.0077 26.6667C28.0077 27.0222 27.8657 27.363 27.6133 27.6133C27.363 27.8657 27.0222 28.0077 26.6667 28.0077C26.3111 28.0077 25.9704 27.8657 25.72 27.6133L21.2 23.08C19.3366 24.5426 17.0355 25.3363 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667C25.3363 17.0355 24.5426 19.3366 23.08 21.2ZM14.6667 6.66667C10.2484 6.66667 6.66667 10.2484 6.66667 14.6667C6.66667 19.0849 10.2484 22.6667 14.6667 22.6667C19.0849 22.6667 22.6667 19.0849 22.6667 14.6667C22.6667 10.2484 19.0849 6.66667 14.6667 6.66667Z"
          />
        </symbol>
      </defs>
    </svg>
  );
};

export default Svg;