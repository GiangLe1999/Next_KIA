import MaintenanceForm from "@/components/maintenaince-server-page/maintenance-form";
import NextImage from "@/components/next-image";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div className="prose postContent">
      <MaintenanceForm />

      <h2>BẢO DƯỠNG ĐỊNH KỲ</h2>
      <p>
        Để đảm bảo chiếc xe của bạn luôn trong tình trạng hoàn hảo và an toàn,
        việc bảo dưỡng định kỳ được thực hiện bởi kỹ thuật viên được đào tạo
        chuyên nghiệp, phụ tùng chính hãng chất lượng cao, KIA có thể cung cấp
        dịch vụ bảo dưỡng phù hợp cho xe bạn.
      </p>

      <div className="post-img-wrapper" style={{ aspectRatio: 1.587 }}>
        <Image
          src="/assets/images/bao-duong/chu-ky-bao-duong-kia.webp"
          alt="Chu kì bảo dưỡng xe KIA"
          fill={true}
        />
        <span className="post-img-title">Chu kì bảo dưỡng xe KIA</span>
      </div>

      <h2>Các hạng mục bảo dưỡng</h2>
      <p>
        Trong quá trình bảo dưỡng ô tô sẽ thực hiện các bước kiểm tra tổng thể
        chiếc xe, từ đó kĩ thuật viên sẽ đánh giá tình trạng các chi tiết, bộ
        phận của xe. Sau đó, kĩ thuật viên sẽ đề xuất phương án bảo dưỡng, sửa
        chữa hoặc thay thế các chi tiết, bộ phận đó với chủ xe. Ứng với mỗi cấp
        bảo dưỡng sẽ có quy trình kiểm tra và các hạng mục cần bảo dưỡng, thay
        thế nhất định.
      </p>
      <div className="my-8 relative w-[70%] aspect-[1.42] mx-auto">
        <NextImage
          src="/assets/images/bao-duong/hang-muc-bao-duong-xe.png"
          alt="Các hạng mục bảo dưỡng xe KIA"
        />
      </div>

      <h2>Bảo dưỡng nhanh</h2>
      <div className="flex gap-6">
        <div className="w-[70%]">
          <p>
            Với nỗ lực đáp ứng tối đa nhu cầu chăm sóc cho chiếc xe nhằm mang
            lại sự hài lòng cho khách hàng, Dịch vụ Bảo Dưỡng Nhanh (Quick
            Maintenance) ra đời nhằm nâng cao hiệu suất phục vụ khách hàng theo
            tiêu chuẩn KIA toàn cầu. Dịch vụ Bảo Dưỡng Nhanh hiện có tại các
            Showroom/đại lý chính hãng của THACO KIA là một quá trình đầu tư có
            chiều sâu cả về thiết bị đặc chủng lẫn đội ngũ kỹ thuật chọn lọc
            được đào tạo liên tục, có bề dày thời gian và đúc kết kinh nghiệm
            thực tiễn. Điều này giúp việc thực hiện các hạng mục bảo dưỡng đều
            được tuân thủ theo đúng quy trình bảo dưỡng chuyên nghiệp của Tập
            đoàn Kia Motors Hàn Quốc.
          </p>

          <p>
            Dịch vụ Bảo Dưỡng Nhanh sẽ giúp Quý khách hàng rút ngắn được thời
            gian chờ đợi tại trạm dịch vụ giảm xuống chỉ còn 60 phút (tính từ
            khi Quý khách ký lệnh sửa chữa bàn giao xe cho đến lúc xe sẵn sàng
            được giao), trong khi quy trình bảo dưỡng thông thường phải mất đến
            150 phút.
          </p>

          <div className="grid grid-cols-2 gap-5">
            <div className="relative w-full aspect-[1.5]">
              <NextImage
                src="/assets/images/bao-duong/bao-duong-kia.webp"
                alt="Bảo dưỡng nhanh xe KIA"
              />
            </div>

            <div className="relative w-full aspect-[1.5]">
              <NextImage
                src="/assets/images/bao-duong/bao-duong-kia-2.webp"
                alt="Bảo dưỡng nhanh xe KIA"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 relative aspect-[0.59]">
          <NextImage
            src="/assets/images/bao-duong/quy-trinh-bao-duong.png"
            alt="Qua trình bảo dưỡng nhanh xe KIA"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
