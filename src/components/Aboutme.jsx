import React from "react";

const Aboutme = () => {
  return (
    <div name="about" className="w-full md:h-screen">
      <div className="max-w-screen-lg flex flex-col mx-auto p-4 pt-32 md:pt-4 justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold text-black-ct dark:text-lime-200 inline border-b-4 border-gray-700 main-text">
            About me
          </h3>
        </div>
        <p className="indent-8 text-lg dark:text-lime-100 main-text">
          Năm nay tôi 22 tuổi, tôi đến từ Quảng Nam. Hiện nay tôi đang đăng kí tham gia thực tập để học hỏi thêm kinh nghiệm về lập trình từ các công ty, góp phần tăng thêm kiến thức, kinh nghiệm chuẩn bị cho tương lai
        </p>
        <br />
        <p className="indent-8 text-lg dark:text-lime-100 main-text">
        Là một người luôn muốn học hỏi, tìm tòi, tôi luôn tìm kiếm những kiến thức mới, thử thách mới. Vì vậy, tôi quyết định học cách lập trình.
           Tôi bắt đầu với những thứ cơ bản về HTML và CSS. Sau một thời gian tôi bắt đầu
           học một số ngôn ngữ lập trình và Framework như Javascript, React JS, Node JS, Tailwinds, Bootstrap4...để giúp tôi nhiều tiến xa hơn trên con đường học lập trình
           </p>
      </div>
    </div>
  );
};

export default Aboutme;
