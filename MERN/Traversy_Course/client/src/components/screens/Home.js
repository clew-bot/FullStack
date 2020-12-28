import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, NavLink } from 'reactstrap';

const Home = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg_svg"
        style={{
          width: '100%',
          zIndex: '-2',
          position: 'fixed',
          bottom: '0',
        }}
      >
        <path
          fill="#8fd8f8"
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,133.3C672,117,768,75,864,58.7C960,43,1056,53,1152,74.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <h1 style={{ textAlign: 'center', paddingTop: '2rem', fontSize: '4rem' }}>
        Welcome to TaskManage
      </h1>

      <Container fluid={true}>
        <Row>
          <Col style={{ textAlign: 'center' }}>
            <div className="bg-1"></div>
            <svg
              id="Layer_5"
              enableBackground="new 0 0 64 64"
              height="512"
              viewBox="0 0 64 64"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <g>
                    <path d="m34 21h28v36h-28z" fill="#ccd1d9" />
                  </g>
                  <g>
                    <path d="m38 25h20v28h-20z" fill="#e6e9ed" />
                  </g>
                  <g>
                    <path
                      d="m54 41v8h-8v-6.14l1.08-.47c.56-.24.92-.78.92-1.39z"
                      fill="#ff826e"
                    />
                  </g>
                  <g>
                    <path d="m46 29h8v8h-8z" fill="#ff826e" />
                  </g>
                  <g>
                    <path d="m43 21v-2h10v2 4h-10z" fill="#b4dd7f" />
                  </g>
                  <g>
                    <path
                      d="m22.8 42.2-2.8 2.8h-8-2-4v1.38c0 3.21 1.58 6.06 4 7.8v.01 7.81h16v-14.12-.01l.42-.67c.43-.71.81-1.44 1.14-2.2.21-.48.4-.97.56-1.47z"
                      fill="#b4dd7f"
                    />
                  </g>
                  <g>
                    <path
                      d="m21 33c1.64 0 3.09.79 4 2h-.93c-1.32 0-2.45.83-2.88 2h-5.19l3-6c0 1.1.9 2 2 2z"
                      fill="#b4dd7f"
                    />
                  </g>
                  <g>
                    <path
                      d="m13 31 3 6h-6-3.9v-.01c.24-1.14.86-2.14 1.72-2.85s1.97-1.14 3.18-1.14c1.1 0 2-.9 2-2z"
                      fill="#b4dd7f"
                    />
                  </g>
                  <g>
                    <path
                      d="m17.35 13.13-.43.09c-2.28.45-3.92 2.45-3.92 4.78-.55 0-1.05.22-1.41.59-.37.36-.59.86-.59 1.41s.22 1.05.59 1.41c.36.37.86.59 1.41.59v7l-2.23-2.97c-.51-.68-1.11-1.3-1.77-1.83l-.2-.16c-1.2-.96-2.15-2.17-2.8-3.52s-1-2.85-1-4.39c0-2.79 1.14-5.33 2.97-7.16s4.37-2.97 7.16-2.97c3.12 0 6.11-1.24 8.31-3.44l.56-.56 3.55 3.55c.93.93 1.45 2.19 1.45 3.5 0 2.73-2.22 4.95-4.95 4.95h-1.05-4c-.55 0-1.05-.22-1.41-.59-.09-.09-.17-.18-.24-.28z"
                      fill="#b27946"
                    />
                  </g>
                  <g>
                    <path
                      d="m47.08 42.39-1.08.47-5 2.14v-4-4l6.08 2.61c.56.24.92.78.92 1.39s-.36 1.15-.92 1.39z"
                      fill="#aab2bd"
                    />
                  </g>
                  <g>
                    <path
                      d="m10 41v4h-4c-2.21 0-4-1.79-4-4 0-1.1.45-2.1 1.17-2.83.73-.72 1.73-1.17 2.83-1.17h.1 3.9z"
                      fill="#aab2bd"
                    />
                  </g>
                  <g>
                    <path
                      d="m41 41v4h-3-4-6.44c.21-.48.4-.97.56-1.47.28-.82.49-1.67.63-2.53z"
                      fill="#ff826e"
                    />
                  </g>
                  <g>
                    <path
                      d="m10 41h12.33l.67 1-.2.2-2.8 2.8h-8-2z"
                      fill="#ff826e"
                    />
                  </g>
                  <g>
                    <path
                      d="m41 37v4h-12.25c.17-.96.25-1.94.25-2.93 0-.38-.07-.74-.19-1.07h5.19 4z"
                      fill="#fcd770"
                    />
                  </g>
                  <g>
                    <path
                      d="m21.52 39.77.81 1.23h-12.33v-4h6 5.19c-.12.33-.19.69-.19 1.07 0 .61.18 1.2.52 1.7z"
                      fill="#fcd770"
                    />
                  </g>
                  <g>
                    <path
                      d="m28.81 37c.12.33.19.69.19 1.07 0 .99-.08 1.97-.25 2.93-.14.86-.35 1.71-.63 2.53l-5.32-1.33.2-.2-.67-1-.81-1.23c-.34-.5-.52-1.09-.52-1.7 0-.38.07-.74.19-1.07.43-1.17 1.56-2 2.88-2h.93.93c.85 0 1.62.34 2.17.9.31.31.56.68.71 1.1z"
                      fill="#f0d0b4"
                    />
                  </g>
                  <g>
                    <path
                      d="m20.06 26.71c.65.71 1.56 1.19 2.59 1.27l.15.05c-.16.41-.4.77-.7 1.07-.55.56-1.32.9-2.17.9-.32 0-.63-.05-.93-.15v1.15l-3 6-3-6v-2-7c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41s.22-1.05.59-1.41c.36-.37.86-.59 1.41-.59 0-2.33 1.64-4.33 3.92-4.78l.43-.09c.07.1.15.19.24.28.36.37.86.59 1.41.59h4v2.34c0 1.06.42 2.08 1.17 2.83l.42.42c.26.26.41.62.41 1 0 .78-.63 1.41-1.41 1.41h-.59v2h-4c0 1.04.4 2 1.06 2.71z"
                      fill="#f0d0b4"
                    />
                  </g>
                  <g>
                    <path
                      d="m23 26.93c0 .39-.07.76-.2 1.1l-.15-.05c-1.03-.08-1.94-.56-2.59-1.27-.66-.71-1.06-1.67-1.06-2.71h4z"
                      fill="#ff826e"
                    />
                  </g>
                </g>
                <g>
                  <circle cx="19" cy="18" r="1" />
                  <path d="m54 20v-2h-12v2h-9v16h-3.585c-.711-1.192-2-2-3.485-2h-.467c-1.137-1.273-2.733-2-4.462-2-.552 0-1-.449-1-1v-.007c2.211-.039 4-1.843 4-4.063v-3.965c1.135-.197 2-1.188 2-2.378 0-.635-.258-1.257-.706-1.707l-.415-.415c-.56-.559-.88-1.332-.88-2.122v-1.343h.05c3.281 0 5.95-2.669 5.95-5.95 0-1.589-.619-3.083-1.743-4.207l-4.257-4.258-1.264 1.265c-2.032 2.031-4.732 3.15-7.605 3.15-6.138 0-11.131 4.993-11.131 11.131 0 3.399 1.522 6.567 4.178 8.692l.193.155c.603.482 1.141 1.038 1.601 1.651l2.028 2.704v1.667c0 .551-.448 1-1 1-2.581 0-4.844 1.676-5.662 4.067-2.442.328-4.338 2.403-4.338 4.933 0 2.414 1.721 4.434 4 4.899v.478c0 3.353 1.566 6.343 4 8.292v8.331h18v-14.842l.268-.435c.343-.558.645-1.136.926-1.723h4.806v12h30v-38zm-15 26h2.205l3.795-1.626v5.626h10v-10h-6.234c-.252-.574-.691-1.056-1.291-1.313l-1.604-.687h9.129v-10h-10v9.627l-3.795-1.627h-2.205v-10h18v26h-18zm9.766-4h4.234v6h-6v-4.484l.474-.203c.6-.256 1.04-.739 1.292-1.313zm-2.078-.525-4.688 2.009v-4.967l4.688 2.01c.19.08.312.266.312.473s-.122.393-.312.475zm.312-5.475v-6h6v6zm5-16v4h-8v-4zm-17 2h7v2h-5v12h-2zm5 16v2h-10.112c.067-.64.112-1.282.112-1.93 0-.024-.007-.046-.007-.07zm-12 .07c0 1.446-.196 2.875-.568 4.257l-3.614-.903-1.471-2.206c-.227-.34-.347-.738-.347-1.148 0-1.142.929-2.07 2.07-2.07h1.859c1.142 0 2.071.929 2.071 2.07zm-12.801 10.317-1.433-2.387h3.82zm4.387-4.387h-8.586v-2h10.586zm.421-6c0 .024-.007.046-.007.07 0 .68.177 1.337.498 1.93h-9.498v-2zm.993-4c.53 0 1.032.123 1.504.315-.809.339-1.474.938-1.919 1.685h-2.967l1.388-2.775c.531.476 1.226.775 1.994.775zm-.826-9h1.826v1.821c-.848-.304-1.523-.978-1.826-1.821zm3.29-5.122.414.415c.078.077.122.184.122.293 0 .228-.186.414-.414.414h-1.586v2h-4v1c0 2.062 1.298 3.858 3.129 4.611-.339.243-.751.389-1.199.389-.41 0-.808-.12-1.148-.348l-2.227-1.484-1.109 1.664 2.226 1.484c.106.07.218.126.329.186v.261l-2 4-2-4v-9.763h-1c-.552 0-1-.449-1-1s.448-1 1-1h1v-1c0-1.804 1.261-3.368 3.01-3.772.53.474 1.222.772 1.989.772h3v1.343c0 1.335.521 2.591 1.464 3.535zm-11.892 5.551c-.561-.748-1.218-1.425-1.952-2.014l-.193-.155c-2.178-1.742-3.427-4.341-3.427-7.129 0-5.035 4.096-9.131 9.131-9.131 3.336 0 6.477-1.272 8.868-3.587l2.844 2.845c.746.745 1.157 1.737 1.157 2.792 0 2.178-1.772 3.95-3.95 3.95h-5.05c-.552 0-1-.449-1-1s.448-1 1-1h1v-2h-1c-1.654 0-3 1.346-3 3 0 .147.023.287.043.429-2.109.697-3.659 2.531-3.982 4.722-1.196.394-2.061 1.522-2.061 2.849 0 1.304.836 2.416 2 2.829v3.171zm-.572 8.571c.768 0 1.463-.299 1.994-.775l1.388 2.775h-6.838c.701-1.205 2.003-2 3.456-2zm-8 7c0-1.654 1.346-3 3-3h3v6h-3c-1.654 0-3-1.346-3-3zm4 5.377v-.377h4.434l2.307 3.845-1.448 1.448 1.414 1.414 9.4-9.4 3.684.921c-.342.844-.746 1.664-1.227 2.446l-2.598 4.223c-1.581 2.569-4.326 4.103-7.343 4.103-4.755 0-8.623-3.868-8.623-8.623zm18 14.623h-14v-5.074c1.4.681 2.965 1.074 4.623 1.074 3.716 0 7.099-1.89 9.047-5.055l.33-.536zm4.571-19h10.429v2h-10.989c.223-.656.413-1.323.56-2zm31.429 14h-26v-10h2v8h22v-30h-5v-2h7z" />
                  <path
                    d="m47.172 32h5.657v2h-5.657z"
                    transform="matrix(.707 -.707 .707 .707 -8.69 45.021)"
                  />
                  <path
                    d="m47.172 44h5.657v2h-5.657z"
                    transform="matrix(.707 -.707 .707 .707 -17.175 48.536)"
                  />
                </g>
              </g>
            </svg>
            <p className="explain">
              Currate tasks and accomplish at your own pace
            </p>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <div className="bg-2"></div>
            <svg
              id="Layer_1"
              enable-background="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g clip-rule="evenodd" fill-rule="evenodd">
                  <path
                    d="m13.323 48.375h485.354c3.203 0 5.84 2.608 5.84 5.812v51.25c0 3.203-2.637 5.84-5.84 5.84h-485.354c-3.203 0-5.812-2.637-5.812-5.84v-51.25c.001-3.204 2.609-5.812 5.812-5.812z"
                    fill="#365e7d"
                  />
                  <path
                    d="m469.565 48.375h29.112c3.203 0 5.84 2.608 5.84 5.812v51.25c0 3.203-2.637 5.84-5.84 5.84h-29.112c3.203 0 5.811-2.637 5.811-5.84v-51.25c0-3.204-2.608-5.812-5.811-5.812z"
                    fill="#2b4d66"
                  />
                  <path
                    d="m7.512 105.437h497.005v352.379c0 3.203-2.637 5.811-5.84 5.811h-485.354c-3.203 0-5.812-2.607-5.812-5.811.001-117.469.001-234.91.001-352.379z"
                    fill="#b1e4f9"
                  />
                  <path
                    d="m61.371 179.705h389.258v209.682h-389.258z"
                    fill="#fff9df"
                  />
                  <path
                    d="m475.376 105.437h29.141v352.379c0 3.203-2.637 5.811-5.84 5.811h-29.112c3.203 0 5.811-2.607 5.811-5.811 0-117.469 0-234.91 0-352.379z"
                    fill="#90d8f9"
                  />
                  <path
                    d="m241.94 159.807h28.147c3.203 0 5.812 2.607 5.812 5.811v28.148c0 3.203-2.608 5.839-5.812 5.839h-28.147c-3.203 0-5.84-2.636-5.84-5.839v-28.148c.001-3.204 2.637-5.811 5.84-5.811zm-194.628 0h28.147c3.203 0 5.812 2.607 5.812 5.811v28.148c0 3.203-2.608 5.839-5.812 5.839h-28.147c-3.203 0-5.841-2.636-5.841-5.839v-28.148c0-3.204 2.637-5.811 5.841-5.811zm0 104.825h28.147c3.203 0 5.812 2.637 5.812 5.84v28.148c0 3.204-2.608 5.812-5.812 5.812h-28.147c-3.203 0-5.841-2.607-5.841-5.812v-28.148c0-3.203 2.637-5.84 5.841-5.84zm0 104.854h28.147c3.203 0 5.812 2.608 5.812 5.812v28.148c0 3.203-2.608 5.84-5.812 5.84h-28.147c-3.203 0-5.841-2.637-5.841-5.84v-28.148c0-3.203 2.637-5.812 5.841-5.812zm194.628 0h28.147c3.203 0 5.812 2.608 5.812 5.812v28.148c0 3.203-2.608 5.84-5.812 5.84h-28.147c-3.203 0-5.84-2.637-5.84-5.84v-28.148c.001-3.203 2.637-5.812 5.84-5.812zm194.628 0h28.148c3.203 0 5.811 2.608 5.811 5.812v28.148c0 3.203-2.608 5.84-5.811 5.84h-28.148c-3.203 0-5.839-2.637-5.839-5.84v-28.148c0-3.203 2.636-5.812 5.839-5.812zm0-104.854h28.148c3.203 0 5.811 2.637 5.811 5.84v28.148c0 3.204-2.608 5.812-5.811 5.812h-28.148c-3.203 0-5.839-2.607-5.839-5.812v-28.148c0-3.203 2.636-5.84 5.839-5.84zm0-104.825h28.148c3.203 0 5.811 2.607 5.811 5.811v28.148c0 3.203-2.608 5.839-5.811 5.839h-28.148c-3.203 0-5.839-2.636-5.839-5.839v-28.148c0-3.204 2.636-5.811 5.839-5.811z"
                    fill="#78c2a4"
                  />
                </g>
                <path d="m497.005 434.515c0-4.139 3.373-7.512 7.512-7.512s7.483 3.373 7.483 7.512v29.111c0 4.168-3.345 7.512-7.483 7.512h-497.005c-4.138 0-7.512-3.344-7.512-7.512v-295.089c0-4.139 3.374-7.484 7.512-7.484 4.139 0 7.483 3.346 7.483 7.484v287.607h482.01zm-213.594-262.322h139.835v-12.387c0-4.139 3.345-7.513 7.483-7.513h39.799c4.139 0 7.513 3.374 7.513 7.513v39.798c0 4.139-3.374 7.512-7.513 7.512h-12.388v50.033h12.388c4.139 0 7.513 3.344 7.513 7.482v39.8c0 4.139-3.374 7.512-7.513 7.512h-12.388v50.031h12.388c4.139 0 7.513 3.373 7.513 7.512v39.8c0 4.139-3.374 7.483-7.513 7.483h-39.799c-4.139 0-7.483-3.345-7.483-7.483v-12.416h-139.835v12.416c0 4.139-3.373 7.483-7.512 7.483h-39.799c-4.139 0-7.483-3.345-7.483-7.483v-12.416h-139.835v12.416c0 4.139-3.373 7.483-7.512 7.483h-39.8c-4.138 0-7.483-3.345-7.483-7.483v-39.8c0-4.139 3.346-7.512 7.483-7.512h12.417v-50.031h-12.416c-4.138 0-7.483-3.373-7.483-7.512v-39.8c0-4.139 3.346-7.482 7.483-7.482h12.417v-50.033h-12.417c-4.138 0-7.483-3.373-7.483-7.512v-39.798c0-4.139 3.346-7.513 7.483-7.513h39.8c4.139 0 7.512 3.374 7.512 7.513v12.387h139.835v-12.387c0-4.139 3.345-7.513 7.483-7.513h39.799c4.139 0 7.512 3.374 7.512 7.513v12.387zm139.835 15.024h-139.835v12.388c0 4.139-3.373 7.512-7.512 7.512h-39.799c-4.139 0-7.483-3.373-7.483-7.512v-12.388h-139.835v12.388c0 4.139-3.373 7.512-7.512 7.512h-12.387v50.033h12.388c4.139 0 7.512 3.344 7.512 7.482v39.8c0 4.139-3.373 7.512-7.512 7.512h-12.388v50.031h12.388c4.139 0 7.512 3.373 7.512 7.512v12.388h139.835v-12.388c0-4.139 3.345-7.512 7.483-7.512h39.799c4.139 0 7.512 3.373 7.512 7.512v12.388h139.835v-12.388c0-4.139 3.345-7.512 7.483-7.512h12.416v-50.031h-12.416c-4.139 0-7.483-3.373-7.483-7.512v-39.8c0-4.139 3.345-7.482 7.483-7.482h12.416v-50.033h-12.416c-4.139 0-7.483-3.373-7.483-7.512v-12.388zm-349.459-19.899h-24.803v24.774h24.803zm389.258 0h-24.804v24.774h24.804zm0 209.653h-24.804v24.804h24.804zm0-104.827h-24.804v24.805h24.804zm-194.629 104.827h-24.804v24.804h24.804zm0-209.653h-24.804v24.774h24.804zm-194.629 209.653h-24.803v24.804h24.803zm0-104.827h-24.803v24.805h24.803zm156.871-37.899c4.139 0 7.483 3.373 7.483 7.512s-3.345 7.483-7.483 7.483h-28.234v27.411h25.599c4.138 0 7.512 3.345 7.512 7.512 0 4.139-3.374 7.483-7.512 7.483h-25.599v27.412h28.234c4.139 0 7.483 3.345 7.483 7.483s-3.345 7.512-7.483 7.512h-35.746c-4.139 0-7.483-3.373-7.483-7.512v-84.785c0-4.139 3.345-7.512 7.483-7.512h35.746zm116.902 14.995c-4.138 0-7.512-3.345-7.512-7.483 0-4.139 3.374-7.512 7.512-7.512h47.255c4.139 0 7.512 3.373 7.512 7.512s-3.373 7.483-7.512 7.483h-16.215v78.096c0 4.139-3.373 7.483-7.512 7.483s-7.483-3.345-7.483-7.483v-78.096zm-230.374 0c-4.139 0-7.483-3.345-7.483-7.483 0-4.139 3.345-7.512 7.483-7.512h47.283c4.138 0 7.483 3.373 7.483 7.512s-3.346 7.483-7.483 7.483h-16.243v78.096c0 4.139-3.345 7.483-7.483 7.483-4.167 0-7.512-3.345-7.512-7.483v-78.096zm137.822-3.175c-2.381-3.401-1.587-8.051 1.814-10.432 3.373-2.381 8.05-1.559 10.432 1.814l21.826 31.039 21.885-31.039c2.381-3.373 7.059-4.195 10.432-1.814s4.195 7.03 1.813 10.432l-24.974 35.434 29.226 41.528c2.353 3.373 1.56 8.05-1.842 10.432-3.373 2.381-8.051 1.559-10.403-1.815l-26.137-37.134-26.164 37.135c-2.381 3.373-7.029 4.195-10.431 1.815-3.374-2.382-4.195-7.059-1.814-10.432l29.254-41.528zm218.383-176.657c4.14 0 7.485 3.345 7.485 7.483 0 4.167-3.346 7.512-7.485 7.512h-17.914c-4.139 0-7.513-3.345-7.513-7.512 0-4.139 3.374-7.483 7.513-7.483zm-94.083 0c4.167 0 7.513 3.345 7.513 7.483 0 4.167-3.346 7.512-7.513 7.512h-17.886c-4.167 0-7.513-3.345-7.513-7.512 0-4.139 3.346-7.483 7.513-7.483zm47.056 0c4.139 0 7.483 3.345 7.483 7.483 0 4.167-3.345 7.512-7.483 7.512h-17.915c-4.139 0-7.512-3.345-7.512-7.512 0-4.139 3.373-7.483 7.512-7.483zm-418.852-28.546h497.005c4.139 0 7.483 3.374 7.483 7.513v352.181c0 4.139-3.345 7.483-7.483 7.483s-7.512-3.345-7.512-7.483v-287.608h-482.01v21.63c0 4.139-3.345 7.483-7.483 7.483s-7.512-3.345-7.512-7.483v-86.203c0-4.139 3.374-7.513 7.512-7.513zm489.493 14.996h-482.01v42.095h482.01z" />
              </g>
            </svg>
            <p className="explain">
              Builtin rich text editor to customize your tasks to your needs
            </p>
          </Col>
          <Col style={{ textAlign: 'center' }}>
            <div className="bg-3"></div>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 512 512"
              height="512"
              viewBox="0 0 512 512"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m379.856 0h-310.634c-6.766 0-12.252 5.486-12.252 12.252v487.495c0 6.767 5.486 12.252 12.252 12.252h373.555c6.767 0 12.252-5.486 12.252-12.252v-424.573z"
                  fill="#f4fbff"
                />
                <path
                  d="m379.856 0h-20.085l75.174 75.174v424.573c0 6.767-5.486 12.252-12.252 12.252h20.085c6.767 0 12.252-5.486 12.252-12.252v-424.573z"
                  fill="#e4f6ff"
                />
                <path
                  d="m379.856 0 75.174 75.174h-69.935c-2.894 0-5.239-2.346-5.239-5.239z"
                  fill="#ddeafb"
                />
                <path
                  d="m434.945 75.174h20.085l-75.174-75.174v20.085z"
                  fill="#cbe2ff"
                />
                <g>
                  <g>
                    <g>
                      <path
                        d="m154.468 300.083h-46.206c-4.268 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h46.206c4.268 0 7.726 3.459 7.726 7.726.001 4.267-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                    <g>
                      <path
                        d="m403.738 300.083h-210.379c-4.268 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h210.379c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m154.468 337.131h-46.206c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h46.206c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                    <g>
                      <path
                        d="m403.738 337.131h-210.379c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h210.379c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m154.468 407.981h-46.206c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h46.206c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                    <g>
                      <path
                        d="m403.738 407.981h-210.379c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h210.379c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                  </g>
                </g>
                <g>
                  <g>
                    <g>
                      <path
                        d="m154.468 445.029h-46.206c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h46.206c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                    <g>
                      <path
                        d="m403.738 445.029h-210.379c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h210.379c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                        fill="#30579d"
                      />
                    </g>
                  </g>
                </g>
                <path
                  d="m205.741 193.165h-100.673c-5.403 0-9.784-4.38-9.784-9.784v-78.173c0-29.885 24.227-54.112 54.112-54.112h12.016c29.885 0 54.112 24.227 54.112 54.112v78.173c0 5.403-4.38 9.784-9.783 9.784z"
                  fill="#3b66c1"
                />
                <path
                  d="m161.412 51.096h-12.016c-.533 0-1.06.025-1.589.04 29.148.843 52.523 24.719 52.523 54.072v78.173c0 5.403-4.38 9.784-9.784 9.784h15.195c5.403 0 9.784-4.38 9.784-9.784v-78.173c-.001-29.885-24.227-54.112-54.113-54.112z"
                  fill="#30579d"
                />
                <path
                  d="m172.556 171.586h-7.045-20.213-7.045c-14.02 0-25.386 11.366-25.386 25.386v31.141c0 1.786 1.447 3.233 3.233 3.233h78.609c1.786 0 3.233-1.447 3.233-3.233v-31.141c0-14.02-11.366-25.386-25.386-25.386z"
                  fill="#90d8f9"
                />
                <path
                  d="m172.556 171.586h-15.76c14.02 0 25.386 11.365 25.386 25.386v31.141c0 1.786-1.448 3.233-3.233 3.233h15.76c1.786 0 3.233-1.447 3.233-3.233v-31.141c0-14.02-11.366-25.386-25.386-25.386z"
                  fill="#75cef9"
                />
                <path
                  d="m155.404 177.582c-24.013 0-43.48-19.466-43.48-43.48v-26.298c0-.632.513-1.141 1.145-1.142 20.123-.037 37.909-2.919 53.773-13.171.474-.306 1.108-.208 1.447.242 7.164 9.511 16.935 12.143 29.455 12.867.638.037 1.14.561 1.14 1.201v26.3c0 24.015-19.467 43.481-43.48 43.481z"
                  fill="#ffddce"
                />
                <path
                  d="m197.744 106.601c-5.149-.298-9.826-.93-14.055-2.219v29.72c0 21.42-15.494 39.209-35.882 42.804 2.468.435 5.004.675 7.597.675 24.013 0 43.48-19.466 43.48-43.48v-26.301c0-.637-.501-1.162-1.14-1.199z"
                  fill="#ffcbbe"
                />
                <g>
                  <g>
                    <path
                      d="m340.413 99.375h-75.624c-4.268 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h75.624c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                      fill="#30579d"
                    />
                  </g>
                  <g>
                    <path
                      d="m390.274 140.158h-125.485c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h125.485c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                      fill="#30579d"
                    />
                  </g>
                  <g>
                    <path
                      d="m390.274 180.942h-125.485c-4.268 0-7.726-3.459-7.726-7.726 0-4.268 3.459-7.726 7.726-7.726h125.485c4.268 0 7.726 3.459 7.726 7.726.001 4.267-3.458 7.726-7.726 7.726z"
                      fill="#30579d"
                    />
                  </g>
                  <g>
                    <path
                      d="m390.274 221.726h-125.485c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h125.485c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
                      fill="#30579d"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <p className="explain">
              <Link
                to="/register"
                style={{ color: '#000', textDecoration: 'underline' }}
              >
                Create an account
              </Link>{' '}
              <span style={{ padding: '0 .3rem' }}>or</span>
              <Link
                to="/login"
                style={{ color: '#000', textDecoration: 'underline' }}
              >
                login
              </Link>
              <span style={{ padding: '0 .3rem' }}>to get started</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
