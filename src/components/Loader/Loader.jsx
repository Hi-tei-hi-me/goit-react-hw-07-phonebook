import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={150}
      width={150}
      color="rgba(235, 212, 98, 0.9)"
      wrapperStyle={{
        position: 'absolute',
        zIndex: '1000',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="rgba(153, 198, 231, 0.9)"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
