import { useContext } from 'react';
import styled from 'styled-components';
import { WeaponInfo } from '../data'
import { KeyHelpContext } from '../GameHud';
import { Column, Row } from './Common'
import { getHelperKeys } from './Key';

const WeaponClusterBackground = styled.div`
  background-color: rgb(38 50 67 / 79%);
  padding: 0.5vw 1vw;
  transform: skew(-35deg, 0deg);
  padding-right: 120px;
  margin-right: -100px;
  margin-bottom: 10px;
`;

const SkewCounter = styled(Row)`
  transform: skew(35deg, 0deg);
`;

const WeaponClusterPositioner = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 15px;
`;

const WeaponImage = styled.img`
  max-height: 5vw;
  width: auto;
  padding-right: 20px;
`;

const MagazineImage = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 5px;
`;

const AmmoColumn = styled(Column)`
  padding-right: 15px;
  border-right: solid 1px white;
`;

const StanceIndicator = styled.img`
  max-height: 5vw;
  width: auto;
  padding-left: 20px;
  margin-right: -2vw;
`;

const WeaponCluster = ({weaponInfo}: {weaponInfo: WeaponInfo}) => {
  const keysConfig = useContext(KeyHelpContext);
  const keys = getHelperKeys(keysConfig, 'BR');
  return (
    <WeaponClusterPositioner>
      <WeaponClusterBackground>
        <SkewCounter>
          <WeaponImage src={weaponInfo.current.icon} />
          <AmmoColumn>
            <span>{weaponInfo.firemode.name} | {weaponInfo.current.ammoName}</span>
            <Row>
              {weaponInfo.current.ammo}
              <MagazineImage src={weaponInfo.current.magazineIcon} />
              x{weaponInfo.current.magazines}
            </Row>
          </AmmoColumn>
          <StanceIndicator src="run.png" />
          </SkewCounter>
      </WeaponClusterBackground>
      <Row style={{justifyContent: 'flex-end'}}> { keys } </Row>
    </WeaponClusterPositioner>
  )
};

export default WeaponCluster