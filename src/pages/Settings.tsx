import React from 'react';
import styled from 'styled-components';

import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

import { init } from '../data/reducers/game';
import { updateSettings } from '../data/reducers/settings';

import Button from '../components/Button';

const StyledPage = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  grid-template-rows: repeat(8, 10rem);
  gap: 1rem;

  padding: 1rem;
`;

const ThumbColor = '#4C566B';
const TrackColor = '#fff';

const StyledBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  padding: 1rem;

  color: #42444F;

  overflow: auto;

  display: flex;
  
  scrollbar-color: ${ThumbColor} ${TrackColor};
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${TrackColor};
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${ThumbColor};
    border-radius: 1rem;
  }
`;

const SettingsPage : React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  const wipeSave = (e : React.MouseEvent) => {
    e.preventDefault();
    dispatch(init(true));
    localStorage.removeItem('state');
  };

  return (
    <StyledPage>
      <StyledBox style={{ gridColumn: '1 / 3', gridRow: '1 / 6' }}>
        <form>
          <label htmlFor="animations">Animations</label>
          <select name="animations" value={settings.animations}
            onChange={(e) => dispatch(updateSettings({ ...settings, animations: e.target.value as 'on'|'off' }))}>
            <option value="on">Enabled</option>
            <option value="off">Disabled</option>
          </select>
          <label htmlFor="updateRate">Update rate: ({settings.updateRate}ms)</label>
          <input type="range"
            name="updateRate" min="33" max="200"
            value={settings.updateRate}
            onChange={(e) => dispatch(updateSettings({ ...settings, updateRate: parseInt(e.target.value, 10) }))}
          />
          <label htmlFor="save">Delete all your progress</label>
          <Button onClick={wipeSave}>Wipe Save</Button>
        </form>
      </StyledBox>
    </StyledPage>
  );
};

export default SettingsPage;
