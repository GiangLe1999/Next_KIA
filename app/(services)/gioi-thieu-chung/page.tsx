import { linkConstants } from "@/constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Về KIA",
    description:
      "Với triết lý “Tận tâm phục vụ”, Trung tâm dịch vụ Kia mang đến chất lượng dịch vụ và cung cách phục vụ lấy khách hàng là trung tâm.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.gioithieu}`,
    },
  };
};

const page: NextPage<Props> = () => {
  return (
    <div className="prose postContent">
      <h2>GIỚI THIỆU DỊCH VỤ VÀ PHỤ TÙNG KIA</h2>
      <p>
        Với triết lý “Tận tâm phục vụ”, Trung tâm dịch vụ Kia mang đến chất
        lượng dịch vụ và cung cách phục vụ lấy khách hàng là trung tâm để đồng
        hành cùng Quý khách trên mọi cung đường cũng như những trải nghiệm trong
        cuộc sống.
      </p>
      <p>
        Kia Việt Nam hiểu được rằng hơn cả việc tìm kiếm và sử dụng những dịch
        vụ tốt nhất cho chiếc xe của mình, Quý khách cần một nơi đáng tin cậy,
        một người bạn luôn sẻ chia mọi điều thú vị về chiếc xe Kia và cuộc sống
        xung quanh. Từ việc kiểm tra và bảo dưỡng định kỳ để duy trì khả năng
        vận hành tối ưu đến việc sửa chữa khi xe gặp sự cố bất kỳ, hay các dịch
        vụ chăm sóc nội ngoại thất, trang bị phụ kiện để tô điểm thêm những
        phong cách riêng cho chủ nhân của chiếc xe Kia, đều được cung cấp với đa
        dạng lựa chọn gói dịch vụ cũng như nền tảng là phụ tùng, phụ kiện, vật
        tư chính hãng, những kỹ thuật viên, tư vấn dịch vụ am hiểu chiếc xe Kia
        của Quý khách nhất.
      </p>
      <p>
        Kia Việt Nam cũng hiểu rằng, thời gian của Quý khách là tài sản cần được
        trân quý và được sử dụng cho những trải nghiệm đầy cảm hứng trong mọi
        hành trình. Do vậy, hệ thống xưởng dịch vụ Kia rộng khắp trên toàn quốc
        không ngừng mở rộng, kết hợp cùng các chương trình bảo dưỡng xe lưu
        động, các trang thiết bị hiện đại, chuyên dụng, quy trình dịch vụ tối
        ưu… sẽ mang dịch vụ Kia đến gần nhất với Quý khách, một cách nhanh chóng
        và hiệu quả.
      </p>
      <h2>
        Hành trình hơn 70 năm biến Kia thành thương hiệu danh tiếng toàn cầu
      </h2>
      <p>
        Năm 2019, Kia lần thứ 4 được xếp vào danh sách 100 thương hiệu có giá
        trị lớn bậc nhất trên toàn cầu (theo báo cáo của Interbrand). Giá trị
        của thương hiệu hãng xe Hàn Quốc đạt 6,428 tỷ USD, tăng gấp gần 7 lần kể
        từ năm 2007. Một kết quả vô cùng ấn tượng trong ngành công nghiệp ô tô.
      </p>
      <div className="post-img-wrapper" style={{ aspectRatio: 1.6 }}>
        <Image
          src="/assets/images/gioi-thieu-chung/kia-top-100-thuong-hieu.webp"
          alt="Kia lần thứ 4 được xếp vào danh sách 100 thương hiệu có giá trị lớn bậc nhất trên toàn cầu năm 2019"
          fill={true}
        />
        <span className="post-img-title">
          Kia lần thứ 4 được xếp vào danh sách 100 thương hiệu có giá trị lớn
          bậc nhất trên toàn cầu
        </span>
      </div>
      <h3>Tham vọng vươn ra khỏi châu Á ngay từ khi khởi nghiệp</h3>
      <p>
        Lịch sử của Kia bắt đầu từ năm 1944 với người sáng lập là ông Kim Chul
        Ho. Khi còn thiếu niên, ông đến Nhật Bản sinh sống và làm việc trong một
        xưởng thép. Sau đó, ông đã mở một doanh nghiệp sản xuất ốc và bu lông
        cho xe đạp ở Osaka. Ông trở về Hàn Quốc vào năm 1944, và thành lập
        Kyungsung Precision Industry chuyên sản xuất bộ phận xe đạp và thép ống.
        Một năm sau, công ty xây dựng một nhà máy bên ngoài Seoul và đổi tên
        thành Kia.
      </p>
      <p>
        Kia giới thiệu chiếc xe đạp Hàn Quốc đầu tiên vào năm 1952 và phát triển
        thần tốc nhờ sự nhạy bén của người đứng đầu. Nhưng tầm nhìn của ông Kim
        không dừng ở loại phương tiện hai bánh thô sơ. Kia bắt đầu chuyển sang
        sản xuất xe máy và xe tải nhỏ, nhưng tiếc rằng, ông Kim đã qua đời vào
        năm 1973, một năm trước khia Kia giới thiệu mẫu xe du lịch đầu tiên mang
        tên Kia Brisa.
      </p>
      <p>
        Trái với suy nghĩ của nhiều người, cái tên Kia không phải một từ viết
        tắt. Kia được lấy ý tưởng từ các ký tự trong tiếng Trung Quốc và Hàn
        Quốc. Vì thế, Kia có nghĩa là &quot;vươn ra khỏi châu Á&quot;. Và tham
        vọng ấy được thực hiện từ rất sớm, khi dòng xe bán tải Brisa có mặt tại
        Qatar.
      </p>
      <p>
        Đến năm 1992, Kia chính thức thành lập văn phòng tại Mỹ. Hai năm sau đó,
        hãng xe Hàn Quốc chính thức mở bán xe ở xứ cờ hoa, với xuất phát điểm 4
        đại lý ở Portland và Oregon. Nhưng chỉ sau 1 năm, hệ thống phân phối đã
        mở rộng lên con số 100 đại lý trên khắp nước Mỹ, đạt doanh số 24.740 xe
        vào năm 1995. Đến nay, hãng xe Hàn Quốc đã có mặt tại 170 quốc gia, vùng
        lãnh thổ, cùng rất nhiều nhà máy trên thế giới, trong đó có Việt Nam.
      </p>
      <p>
        Kia cạnh tranh với đối thủ bằng giá bán tốt cộng với chính sách bảo hành
        uy tín. Năm 1997, sau khi về chung nhà với Hyundai, dưới sự hỗ trợ của
        tập đoàn mẹ, Kia tăng trưởng không ngừng. Bước ngoặt của thương hiệu bắt
        đầu từ năm 2004, khi kế hoạch đại tu toàn bộ sản phẩm được thực hiện. Để
        thu hút người trẻ, Kia tập trung thay đổi hình ảnh các dòng xe theo
        hướng thể thao, cá tính và mạnh mẽ. Người giúp hãng xe Hàn thực hiện
        tham vọng đó không ai khác ngoài &quot;phù thủy&quot; Peter Schreyer,
        cựu nhân viên thiết kế của tập đoàn Volkswagen. Tài năng của ông nhanh
        chóng được công nhận tại đây và giúp ông có được vị trí Giám đốc thiết
        kế vào năm 2005, chỉ sau đúng một năm làm việc tại Kia.
      </p>
      <p>
        Điểm nhấn lớn nhất trong cuộc cách mạng thiết kế của Kia không thể không
        nhắc đến lưới tản nhiệt mũi hổ (tiger nose). Peter Schreyer từng nói
        rằng, lưới tản nhiệt mũi hổ là một hình ảnh nhận diện mạnh mẽ, một con
        dấu, một mã định danh cho sản phẩm: &quot;Mỗi mẫu xe cần một khuôn mặt
        riêng, và những mẫu xe của Kia có một khuôn mặt mạnh mẽ và đặc biệt.
        Khuôn mặt đó giúp mọi người có thể xác định một chiếc Kia ngay từ đằng
        xa&quot;. Mũi hổ được thiết kế dạng 3 chiều và linh động theo từng dòng
        xe. Hãng có thể dễ dàng mở rộng, nâng cao, thu nhỏ hay hạ thấp hoặc
        ‘trang trí’ cụm đèn pha đi kèm mà không làm mất đi nét đặc trưng của
        thương hiệu.
      </p>
      <h3>
        Hơn 70 năm sáng tạo không ngừng với hơn 70 giải thưởng thiết kế toàn cầu
      </h3>
      <p>
        Sự xuất sắc của bậc thầy thiết kế Peter Schreyer đã đưa hãng xe xứ sở
        kim chi lên một tầm cao mới. Tính đến năm 2020, Kia nhận được tổng cộng
        hơn 70 danh hiệu thiết kế trên toàn thế giới, con số mơ ước của rất
        nhiều hãng xe. Trong đó, bao gồm 24 giải thưởng thiết kế Reddot kể từ
        năm 2009 và 34 giải thưởng thiết kế iF từ năm 2010.
      </p>
      <p>
        Khách hàng trẻ dễ dàng bị hấp dẫn bởi vẻ ngoài, nhưng họ cũng cần một
        chiếc xe chất lượng. Kia xác định được điều này từ rất sớm, bằng cách
        liên tục nghiên cứu và nâng cao chất lượng sản phẩm. Năm 2020 cũng đánh
        dấu năm thứ 6 liên tiếp Kia dẫn đầu bảng đánh giá chất lượng ban đầu của
        J.D. Power, một công ty phân tích dữ liệu uy tín tại Mỹ.
      </p>
      <p>
        Ngoài ra, với hàng loạt các danh hiệu như &quot;Xe an toàn đáng tin
        cậy&quot; dành cho Cerato, Sedona và Sorento; Chứng nhận an toàn 5 sao
        của Euro NCAP dành cho Stinger và Sedona; Chứng nhận an toàn 5 sao của
        NHTSA dành cho Cerato và Sedona, Kia đã chứng minh được chất lượng sản
        phẩm của mình trong làng ô tô toàn cầu. Đặc biệt, với 2 giải thưởng danh
        giá &quot;Xe của năm 2020&quot; dành cho Telluride; &quot;Xe đô thị của
        năm 2020&quot; dành cho Soul như một cột mốc thành tựu cho hành trình
        không ngừng vươn lên, đột phá toàn diện về thiết kế, tính năng an toàn
        và chất lượng sản phẩm của Kia.
      </p>
      <h2>Phòng trưng bày KIA</h2>
      <p>
        Showroom KIA có phong cách thiết kế hiện đại, trẻ trung và tiện nghi.
        Riêng khu vực trưng bày có diện tích lớn ít nhất 300m2 với đa dạng các
        dòng xe hiện đại nhất của Kia: Sedona, New Sorento, Rondo, Seltos, All
        New Cerato, Soluto, New Morning…đang được khách hàng ưa chuộng và đánh
        giá cao.
      </p>

      <div className="post-img-wrapper" style={{ aspectRatio: 1.778 }}>
        <Image
          src="/assets/images/gioi-thieu-chung/showroom-kia.webp"
          alt="Showroom KIA có phong cách thiết kế hiện đại, trẻ trung và tiện nghi"
          fill={true}
        />
        <span className="post-img-title">
          Showroom KIA có phong cách thiết kế hiện đại, trẻ trung và tiện nghi
        </span>
      </div>

      <p>
        Bên cạnh đó, showroom có đội ngũ nhân viên được đào tạo bài bản, am hiểu
        sản phẩm, chuyên nghiệp, giàu kinh nghiệm và nhiệt tình trong công
        việc…đáp ứng tốt nhất các yêu cầu về tư vấn, sửa chữa, bảo hành, bảo
        dưỡng xe; đem đến sự an tâm cho Quý khách hàng.
      </p>

      <div className="post-img-wrapper" style={{ aspectRatio: 2.04 }}>
        <Image
          src="/assets/images/gioi-thieu-chung/nhan-vien-kia.webp"
          alt="Đội ngũ nhân viên được đào tạo bài bản, am hiểu
          sản phẩm, chuyên nghiệp, giàu kinh nghiệm"
          fill={true}
        />
        <span className="post-img-title">
          Đội ngũ nhân viên được đào tạo bài bản, am hiểu sản phẩm, chuyên
          nghiệp, giàu kinh nghiệm
        </span>
      </div>

      <h2>Xưởng dịch vụ sửa chữa KIA</h2>
      <p>
        Xưởng dịch vụ sửa chữa của KIA có quy mô nhỏ nhất 800 m2, được đầu tư,
        trang bị máy móc, thiết bị công nghệ hiện đại đáp ứng các như cầu bảo
        hành, bảo dưỡng, sửa chữa và dịch vụ đồng sơn xe mới… Công suất phục vụ
        sửa chữa tối đa của xưởng lên đến 30 lượt xe mỗi ngày. Bên cạnh đó, với
        đội ngũ kỹ thuật viên giàu kinh nghiệm, trình độ chuyên môn cao và phong
        cách phục vụ chuyên nghiệp, showroom Kia đủ năng lực đáp ứng các yêu cầu
        khó khăn nhất của Quý khách hàng.
      </p>

      <div className="grid-2-cols">
        <div className="post-img-wrapper">
          <Image
            src="/assets/images/gioi-thieu-chung/xuong-dich-vu-sua-chua-kia-1.jpg"
            alt="Xưởng dịch vụ sửa chữa của KIA"
            fill={true}
          />
          <span className="post-img-title">Xưởng dịch vụ sửa chữa của KIA</span>
        </div>

        <div className="post-img-wrapper">
          <Image
            src="/assets/images/gioi-thieu-chung/xuong-dich-vu-sua-chua-kia-2.jpg"
            alt="Xưởng dịch vụ sửa chữa của KIA"
            fill={true}
          />
          <span className="post-img-title">Xưởng dịch vụ sửa chữa của KIA</span>
        </div>
      </div>
    </div>
  );
};

export default page;
