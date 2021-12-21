import s from "./Toggle.module.scss";

function Toggle({ changeTheme, setChangeTheme }) {
  return (
    <div
      className={s.toggleSwitch}
      onClick={() => setChangeTheme(!changeTheme)}
    >
      <input
        type="checkbox"
        className={s.toggleSwitchCheckbox}
        checked={changeTheme}
        readOnly
      />
      <span className={s.toggleSwitchInner} />
      <label className={s.toggleSwitchLabel}>
        <span className={s.toggleSwitchThumb} />
      </label>
    </div>
  );
}

export default Toggle;
