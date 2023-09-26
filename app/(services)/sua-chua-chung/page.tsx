import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div className="prose postContent">
      <h2>DỊCH VỤ SỬA CHỮA CHUNG</h2>

      <p>
        Với hệ thống xưởng sửa chữa chuyên nghiệp và trải rộng khắp cả nước
        chúng tôi sẽ đáp ứng được mọi nhu cầu và các tình huống phát sinh khi
        Khách hàng sử dụng xe đồng thời cung cấp đầy đủ các dịch vụ sửa chữa đa
        dạng và chất lượng đến quý Khách hàng.
      </p>

      <p>
        Những hạng mục sửa chữa mà chúng tôi cung cấp cho khách hàng gồm có:
      </p>

      <ul>
        <li>Sửa chữa Động cơ – Hộp số</li>
        <li>Sửa chữa gầm bệ</li>
        <li>Sửa chữa hệ thống điện</li>
      </ul>

      <h2>DỊCH VỤ SỬA CHỮA ĐỒNG SƠN</h2>
      <p>
        Với hệ thống xưởng Dịch vụ sửa chữa Đồng sơn trải rộng khắp cả nước bằng
        một mức giá cạnh tranh và công nghệ hiện đại, chúng tôi đáp ứng nhanh
        chóng mọi yêu cầu về tân trang và làm mới xe của Khách hàng. Chúng tôi
        phân công từng giai đoạn đồng sơn xe quý Khách tới từng KTV chuyên
        trách. Đảm bảo chất lượng ở từng giai đoạn làm việc.
      </p>

      <p>
        Chúng tôi cam kết bảo hành chất lượng phụ tùng thay thế khi sửa chữa và
        làm mới bề mặt sơn (loại trừ các tác động từ bên ngoài) sau 6 tháng hoặc
        10.000 km tùy theo điều kiện nào đến trước.
      </p>
    </div>
  );
};

export default page;
