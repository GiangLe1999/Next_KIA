import PriceSection from "@/components/car-page/price-section";
import { linkConstants } from "@/constants";
import { carNames } from "@/data/home";
import { NextPage } from "next";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Tính phí lăn bánh KIA 2023",
    description:
      "Cách tính và bảng tính phí lăn bánh Ô tô KIA chính xác nhất 2023. Tham khảo tại Website KIA Việt Nam chính thức.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${linkConstants.philanbanh}`,
    },
  };
};

const page: NextPage<Props> = () => {
  return (
    <div className="container py-12 postContent !mt-12 prose overflow-hidden">
      <h2>Công cụ tính giá xe lăn bánh của KIA tại Việt Nam</h2>
      <p>
        Dưới đây là công cụ <strong>tính giá ô tô lăn bánh</strong> và thông tin
        các biểu phí đăng ký xe ô tô KIA trên toàn quốc dành cho tất cả mọi
        người.
      </p>
      <PriceSection
        name={"new mazda 2"}
        carNameArr={carNames}
        isInstallmentPage
      />

      <h2>Hiểu rõ hơn về cách tính giá xe ô tô lăn bánh</h2>
      <p>
        Khi quyết định mua một chiếc ô tô, người tiêu dùng thường quan tâm về
        giá của sản phẩm, bởi chi phí để sở hữu một chiếc ô tô là rất lớn. Nhưng
        trước khi mua một chiếc xe hầu như người tiêu dùng sẽ không biết mình sẽ
        mua chiếc xe ô tô đó với giá bao nhiêu? Bao gồm những loại chi phí nào?
        Cách tính giá xe lăn bánh ra sao?
      </p>

      <p>
        Để giúp bạn đọc giải quyết vấn đề liên quan đến tài chính trước khi mua
        một chiếc ô tô, sau đây chúng tôi cung cấp đến bạn đọc tiện ích{" "}
        <strong>
          <i>“Bảng tính giá xe ô tô KIA lăn bánh”</i>
        </strong>{" "}
        - công cụ tính giá lăn bánh và thông tin các biểu phí đăng ký xe ô tô
        trên toàn quốc.
      </p>

      <h3 className="mb-4">Giá xe lăn bánh bao gồm những loại chi phí nào?</h3>
      <p>
        Khi mua một chiếc ô tô, bên cạnh phải trả tiền theo giá trị của xe, thì
        người tiêu dùng sẽ phải chịu các loại phí khác bao gồm:
      </p>
      <ul>
        <li>
          <strong>Giá xe:</strong> Giá trị thực của xe được hãng công bố đến
          người tiêu dùng
        </li>
        <li>
          <strong>Phí trước bạ: </strong> Khoản lệ phí người tiêu dùng phải nộp
          cho cơ quan thuế khi muốn đăng ký quyền sở hữu ô tô trong trường hợp
          mua ô tô mới hay ô tô đã qua sử dụng
        </li>
        <li>
          <strong>Phí đăng ký biển số :</strong> Khoản phí đăng ký biển số để xe
          được sử dụng hợp pháp
        </li>
        <li>
          <strong>
            Phí đường bộ (phí sử dụng đường bộ, phí bảo trì đường bộ) :
          </strong>{" "}
          Khoản phí nộp nhằm mục đích bảo trì và nâng cấp đường bộ phục vụ cho
          các phương tiện
        </li>
        <li>
          <strong>Bảo hiểm TNDS :</strong> Phí bảo hiểm bắt buộc trách nhiệm dân
          sự với người sở hữu xe, khoản tiền phải thanh toán cho doanh nghiệp
          bảo hiểm khi mua bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe.
        </li>
        <li>
          <strong>Phí đăng kiểm :</strong> Khoản phí để cơ quan chức năng kiểm
          tra, đánh giá chi tiết xe có đủ đảm bảo tiêu chuẩn an toàn khi tham
          gia giao thông.
        </li>
      </ul>
      <p>
        Tổng của các loại chi phí này cộng lại chính là giá xe lăn bánh mà người
        tiêu dùng phải trả khi mua một chiếc ô tô.
      </p>

      <p>
        Khi mua một chiếc ô tô, bên cạnh phải trả tiền theo giá trị của xe, thì
        người tiêu dùng sẽ phải chịu các loại phí khác bao gồm:
      </p>

      <h3 className="mb-4">Cách tính giá xe lăn bánh tại website KIA</h3>
      <p>
        Tại website KIA hiện nay cũng cung cấp tiện ích tính giá ô tô lăn bánh
        và thông tin các biểu phí đăng ký xe ô tô KIA trên toàn quốc dành cho
        tất cả mọi người. Hãy cùng thực hiện các bước đơn giản sau đây:
      </p>
      <ul>
        <li>
          <strong>Bước 1 :</strong> Truy cập website KIA
        </li>
        <li>
          <strong>Bước 2 :</strong> Tại tab Menu bên tay trái chọn mục “Tính phí
          lăn bánh”
        </li>
        <li>
          <strong>Bước 3 :</strong> Hệ thống sẽ hiện lên các thông tin, quý
          khách hàng chỉ cần hoàn thiện đầy đủ thông tin về sản phẩm và nơi đăng
          ký lăn bánh như sau:
          <p>- &nbsp;Dòng xe</p>
          <p>- &nbsp;Phiên bản</p>
          <p>- &nbsp;Nơi đăng ký</p>
        </li>
        <li>
          <strong>Bước 4 :</strong> Sau khi hoàn tất các thông tin, hệ thống
          trên, website sẽ trả kết quả về giá xe lăn bánh bao gồm chi tiết các
          loại phí chi.
        </li>
      </ul>
      <p>
        Hy vọng với tiện ích{" "}
        <strong>
          <i>“Bảng tính giá xe ô tô lăn bánh”</i>
        </strong>{" "}
        chúng tôi cung cấp, quý khách hàng sẽ ước tính được chi phí cần bỏ ra để
        mua một chiếc xe ô tô KIA mình yêu thích.
      </p>

      <h2>Các loại phí khi sử dụng ô tô cần biết</h2>
      <p>
        Dưới đây là các loại chi phí thường niên khi sử dụng xe ô tô theo quy
        định tại Việt Nam:
      </p>

      <table className="styled-table">
        <thead>
          <tr>
            <td>Áp dụng cho đối tượng</td>
            <td className="!text-right">Lệ phí (VNĐ)</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Xe chở người dưới 10 chỗ đăng ký tên cá nhân</td>
            <td className="special-td">1,560,000</td>
          </tr>
          <tr>
            <td>
              Xe chở người dưới 10 chỗ (trừ xe đăng ký tên cá nhân); xe tải, xe
              ô tô chuyên dùng có khối lượng toàn bộ dưới 4.000 kg; các loại xe
              buýt; xe chở hàng và xe chở người 4 bánh có gắn động cơ
            </td>
            <td className="special-td">2,160,000</td>
          </tr>

          <tr>
            <td>
              Xe chở người từ 10 chỗ đến dưới 25 chỗ; xe tải, xe ô tô chuyên
              dùng có khối lượng toàn bộ từ 4.000 kg đến dưới 8.500 kg
            </td>
            <td className="special-td">3,240,000</td>
          </tr>

          <tr>
            <td>
              Xe chở người từ 25 chỗ đến dưới 40 chỗ; xe tải, xe ô tô chuyên
              dùng có khối lượng toàn bộ từ 8.500 kg đến dưới 13.000 kg
            </td>
            <td className="special-td">4,680,000</td>
          </tr>

          <tr>
            <td>
              Xe chở người từ 40 chỗ trở lên; xe tải, xe ô tô chuyên dùng có
              khối lượng toàn bộ từ 13.000 kg đến dưới 19.000 kg; xe đầu kéo có
              khối lượng bản thân cộng với khối lượng cho phép kéo theo đến dưới
              19.000 kg
            </td>
            <td className="special-td">7,080,000</td>
          </tr>

          <tr>
            <td>
              Xe tải, xe ô tô chuyên dùng có khối lượng toàn bộ từ 19.000 kg đến
              dưới 27.000 kg; xe đầu kéo có khối lượng bản thân cộng với khối
              lượng cho phép kéo theo từ 19.000 kg đến dưới 27.000 kg
            </td>
            <td className="special-td">8,640,000</td>
          </tr>

          <tr>
            <td>
              Xe tải, xe ô tô chuyên dùng có khối lượng toàn bộ từ 27.000 kg trở
              lên; xe đầu kéo có khối lượng bản thân cộng với khối lượng cho
              phép kéo theo từ 27.000 kg đến dưới 40.000 kg
            </td>
            <td className="special-td">12,480,000</td>
          </tr>

          <tr>
            <td>
              Xe ô tô đầu kéo có khối lượng bản thân cộng với khối lượng cho
              phép kéo theo từ 40.000 kg trở lên
            </td>
            <td className="special-td">17,160,000</td>
          </tr>
        </tbody>
      </table>

      <p className="table-title">
        Phí bảo trì đường bộ xe ô tô mới nhất 9/2023
      </p>

      <table className="styled-table">
        <thead>
          <tr>
            <td>Áp dụng cho đối tượng</td>
            <td className="!text-right">Lệ phí (VNĐ)</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Xe ô tô dưới 6 chỗ không kinh doanh vận tải</td>
            <td className="special-td">480,700</td>
          </tr>
          <tr>
            <td>Xe ô tô từ 6 đến 11 chỗ không kinh doanh vận tải</td>
            <td className="special-td">873,400</td>
          </tr>

          <tr>
            <td>Xe ô tô từ 12 đến 24 chỗ không kinh doanh vận tải</td>
            <td className="special-td">1,397,000</td>
          </tr>

          <tr>
            <td>Xe ô tô trên 24 chỗ không kinh doanh vận tải</td>
            <td className="special-td">2,007,500</td>
          </tr>

          <tr>
            <td>Xe vừa chở người vừa chở hàng (Pickup, minivan)</td>
            <td className="special-td">480,700</td>
          </tr>

          <tr>
            <td>Xe tải dưới 3 tấn</td>
            <td className="special-td">938,300</td>
          </tr>

          <tr>
            <td>Xe tải từ 3 tấn đến 8 tấn</td>
            <td className="special-td">1,826,000</td>
          </tr>

          <tr>
            <td>Xe tải trên 8 tấn đến 15 tấn</td>
            <td className="special-td">3,020,600</td>
          </tr>

          <tr>
            <td>Xe tải trên 15 tấn</td>
            <td className="special-td">3,520,000</td>
          </tr>

          <tr>
            <td>Xe đầu kéo</td>
            <td className="special-td">5,280,000</td>
          </tr>
        </tbody>
      </table>

      <p className="table-title">
        Biểu phí bảo hiểm TNDS xe ô tô mới nhất 9/2023
      </p>

      <table className="styled-table">
        <thead>
          <tr>
            <td>Áp dụng cho đối tượng</td>
            <td className="!text-right">Lệ phí (VNĐ)</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Xe ô tô tải, đoàn xe ô tô, xe ô tô đầu kéo có trọng tải trên 20
              tấn và các loại xe ô tô chuyên dùng
            </td>
            <td className="special-td">610,000</td>
          </tr>
          <tr>
            <td>
              Xe ô tô tải, đoàn xe ô tô, xe ô tô đầu kéo có trọng tải trên 7 tấn
              đến 20 tấn và các loại máy kéo
            </td>
            <td className="special-td">400,000</td>
          </tr>

          <tr>
            <td>Xe ô tô từ 12 đến 24 chỗ không kinh doanh vận tải</td>
            <td className="special-td">1,397,000</td>
          </tr>

          <tr>
            <td>Xe ô tô tải có trọng tải trên 2 tấn đến 7 tấn</td>
            <td className="special-td">370,000</td>
          </tr>

          <tr>
            <td>Xe ô tô tải có trọng tải đến 2 tấn</td>
            <td className="special-td">330,000</td>
          </tr>

          <tr>
            <td>
              Máy kéo bông sen, công nông và các loại phương tiện vận chuyển
              tương tự{" "}
            </td>
            <td className="special-td">230,000</td>
          </tr>

          <tr>
            <td>Rơ moóc, sơ mi rơ moóc</td>
            <td className="special-td">230,000</td>
          </tr>

          <tr>
            <td>Xe ô tô khách trên 40 ghế (kể cả lái xe), xe buýt</td>
            <td className="special-td">400,000</td>
          </tr>

          <tr>
            <td>Xe ô tô khách từ 25 đến 40 ghế (kể cả lái xe)</td>
            <td className="special-td">370,000</td>
          </tr>

          <tr>
            <td>Xe ô tô khách từ 10 ghế đến 24 ghế (kể cả lái xe)</td>
            <td className="special-td">330,000</td>
          </tr>

          <tr>
            <td>Xe ô tô dưới 10 chỗ ngồi</td>
            <td className="special-td">340,000</td>
          </tr>

          <tr>
            <td>Xe ô tô cứu thương</td>
            <td className="special-td">290,000</td>
          </tr>
        </tbody>
      </table>

      <p className="table-title !mb-0">Phí đăng kiểm xe ô tô mới nhất 9/2023</p>
    </div>
  );
};

export default page;
