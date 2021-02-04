import React, { useEffect } from 'react';
import { getMyInfo } from '../../views/service';
import { useDispatch, useSelector } from 'react-redux';
import { updataInfo, selectUser } from '../../store/userSlice';

export default function WrapperContent(props: { children: React.ReactNode }) {
  const stateUser = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    // 防止每个路由模块都获取/设置个人信息
    if (stateUser.name) {
      return;
    }
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getUserInfo = async () => {
    let info = await getMyInfo();
    dispatch(updataInfo(info.data));
  };
  return <>{props.children}</>;
}
