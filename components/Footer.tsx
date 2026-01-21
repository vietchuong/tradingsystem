export default function Footer() {
    return (
        <footer className="bg-navy-light border-t border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Viết Chương Trading
                        </h3>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Hành trình trở thành Trader chuyên nghiệp bắt đầu từ tư duy đúng
                            đắn.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                Youtube
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                Community
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">
                            Đăng Ký Tư Vấn
                        </h4>
                        <form className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="flex-1 bg-navy border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                            />
                            <button className="bg-gold text-navy font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
                                Gửi
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-4">
                            *Chúng tôi cam kết bảo mật thông tin của bạn.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} Viết Chương Trading. All rights
                        reserved.
                    </p>
                    <p className="mt-4 md:mt-0">
                        Thiết kế bởi Viết Chương - Lấy cảm hứng từ những huyền thoại
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-600 max-w-4xl mx-auto">
                        DISCLAIMER: Giao dịch tài chính tiềm ẩn rủi ro cao và có thể không
                        phù hợp với tất cả mọi người. Phương pháp hướng dẫn dựa trên xác
                        suất thống kê, không đảm bảo lợi nhuận chắc chắn. Viết Chương không
                        chịu trách nhiệm cho bất kỳ khoản thua lỗ nào của học viên. Hãy quản
                        lý vốn chặt chẽ.
                    </p>
                </div>
            </div>
        </footer>
    );
}
