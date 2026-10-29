// =====================================================
// DANH SÁCH SẢN PHẨM - DỮ LIỆU MẪU
// Chỉnh sửa thông tin sản phẩm tại đây.
// Thay đổi giá, mô tả, hình ảnh theo nhu cầu.
// Thay trường 'image' bằng đường dẫn ảnh thật,
// ví dụ: '/images/ruoi-tuoi.jpg'
// =====================================================

export const products = [
  {
    id: 1,
    name: 'Rươi Tươi',
    description:
      'Rươi tươi sống, được khai thác theo mùa từ các vùng bãi bồi ven sông. Sản phẩm tươi ngon, giữ nguyên hương vị tự nhiên. (Giá có thể thay đổi theo mùa vụ)',
    price: '299k',
    unit: '1kg',
    image: '/images/ruoi/ruoi-tuoi.jpg',
    emoji: '🦐',
    badge: 'Theo mùa',
    gradient: 'from-emerald-100 to-teal-50',
  },
  {
    id: 2,
    name: 'Rươi Kho',
    description:
      'Rươi đã được làm sạch, sơ chế sẵn, tiện lợi cho việc chế biến các món ăn. Tiết kiệm thời gian chuẩn bị.',
    price: '350k',
    unit: '1 niêu',
    image: '/images/ruoi/ruoi-kho.jpg',
    emoji: '🍽️',
    badge: null,
    gradient: 'from-amber-100 to-orange-50',
  },
  {
    id: 3,
    name: 'Rươi Cấp Đông',
    description:
      'Rươi được cấp đông nhanh, bảo quản trong điều kiện tiêu chuẩn. Giữ được hương vị gần với rươi tươi, có thể sử dụng quanh năm.',
    price: '249k',
    unit: '1kg',
    image: '/images/ruoi/ruoi-cap-dong.jpg',
    emoji: '❄️',
    badge: null,
    gradient: 'from-sky-100 to-blue-50',
  },
  {
    id: 4,
    name: 'Chả Rươi',
    description:
      'Chả rươi thành phẩm, giòn thơm, đậm đà. Chế biến theo công thức truyền thống, sẵn sàng thưởng thức hoặc hâm nóng lại.',
    price: '350k',
    unit: '6 cái',
    image: '/images/ruoi/cha-ruoi.jpg',
    emoji: '🥘',
    badge: 'Bán chạy',
    gradient: 'from-yellow-100 to-amber-50',
  },
  {
    id: 5,
    name: 'Mắm Rươi',
    description:
      'Mắm rươi lên men tự nhiên, hương vị đậm đà đặc trưng. Dùng làm nước chấm hoặc gia vị cho nhiều món ăn truyền thống.',
    price: '250k',
    unit: '1 lọ',
    image: '/images/ruoi/mam-ruoi.jpg',
    emoji: '🫙',
    badge: null,
    gradient: 'from-orange-100 to-red-50',
  },
  {
    id: 6,
    name: 'Sản Phẩm Khác Từ Rươi',
    description:
      'Các sản phẩm chế biến khác từ rươi. Vui lòng liên hệ để biết thêm chi tiết về sản phẩm và giá bán.',
    price: 'Liên hệ báo giá',
    unit: '',
    image: '/images/ruoi/san-pham-ruoi-khac.jpg',
    emoji: '🎁',
    badge: null,
    gradient: 'from-emerald-50 to-lime-50',
  },
];
