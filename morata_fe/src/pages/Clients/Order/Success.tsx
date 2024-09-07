import { Button, Result, Watermark } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTES } from '~/constants/router';

export default function Success() {
    const navigate = useNavigate();

    return (
        <Watermark content={['Morata', 'Thank you!']}>
            <div className='h-[100vh]' />
            <Result
                status='success'
                title='Đơn đặt hàng của bạn đã gửi thành công!'
                subTitle='Bạn sẽ nhận được thông báo xác nhận qua email của chúng tôi.'
                className='fixed left-[50%] top-[50%] z-99999 -translate-x-[50%] -translate-y-[50%] rounded-md border border-transparent bg-gray-3 bg-opacity-65 p-10'
                extra={[
                    <Button
                        onClick={() => {
                            navigate(MAIN_ROUTES.MY_ORDERS, { replace: true });
                        }}
                        type='primary'
                        key='home'
                    >
                        Kiểm tra trạng thái
                    </Button>,
                    <Button
                        key='my-order'
                        onClick={() => {
                            navigate('/', { replace: true });
                        }}
                    >
                        Trang chủ
                    </Button>,
                ]}
            />
        </Watermark>
    );
}
