class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="footerTextWrapper">
                    <div class="footerTextTitle footerTextTitle_font-weight">NZ Toys</div>
                    <br>
                    NZ Toys chuyên cung cấp và nhận Order các dòng mô hình chính hãng trên thế giới. Nhận tìm kiếm và mua hàng theo yêu cầu.</div>
                <div class="footerTextWrapper">
                    <br>
                    <br>
                    <div class="footerLabelText footerTextTitle_font-weight">Địa chỉ:</div> Số 2/104 Nguyễn Gia Thiều, phường Võ Thị Sáu, Quận 3, Thành Phố Hồ Chí Minh (12PM - 9PM)
                    <br>
                    <br>
                    <div class="footerLabelText footerTextTitle_font-weight">Điện thoại:</div> 0767762204
                    <br>
                    <br>
                    <div class="footerLabelText footerTextTitle_font-weight">Email:</div> nztoys2204@gmail.com
                </div>
                <br>
                <br>
                <div class="footerTextWrapper">
                    <div class="footerTextTitle footerTextTitle_font-weight">Hỗ trợ khách hàng</div>
                    <br>
                    <ul>
                        <li class="li li_margin-top ul_hover" onclick="footer_Li_onclick('pages/chinh-sach-mua-hang.html')">Chính sách mua hàng</li>
                        <li class="li li_margin-top ul_hover" onclick="footer_Li_onclick('pages/chinh-sach-doi-tra.html')">Chính sách đổi trả</li>
                        <li class="li li_margin-top ul_hover" onclick="footer_Li_onclick('pages/contact.html')">Liên hệ</li>
                        <li class="li li_margin-top ul_hover" onclick="footer_Li_onclick('pages/search.html')">Tìm kiếm</li>
                    </ul>
                </div>
                <br>
                <div class="footerTextWrapper">
                    <div class="footerTextTitle footerTextTitle_font-weight">Chăm sóc khách hàng</div>
                    <br>
                    <div class="footerContactInformations">
                        <img class="footerContactInformationsImage" src="images/phone-call-icon.jpg" alt="" width="50px" height="50px">
                        <div class="footerContactInformationsTexts"> 
                            <div class="footerPhoneNumber footerPhoneNumber_margin">0767762204</div>
                            <div class="footerEmail footerPhoneNumber_margin">nztoys2204@gmail.com</div>
                        </div>
                    </div>
                    <br>
                    <div class="footerTextTitle_font-weight">Theo dõi chúng tôi tại</div>
                    <br>
                    <nav>
                        <button class="footerNavFacebook footerNavFacebook_background-image footerNavFacebook_background-size shopAllLabelBlock_background-color"></button>
                        <button class="footerNavTwitter footerNavFacebook footerNavFacebook_background-size shopAllLabelBlock_background-color"></button>
                        <button class="footerNavInstagram footerNavInstagram_background-position footerNavFacebook shopAllLabelBlock_background-color"></button>
                        <button class="footerNavGoogle footerNavFacebook footerNavFacebook_background-size footerNavInstagram_background-position shopAllLabelBlock_background-color"></button>
                        <button class="footerNavYoutube footerNavFacebook footerNavFacebook_background-size footerNavInstagram_background-position shopAllLabelBlock_background-color"></button>
                    </nav>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);