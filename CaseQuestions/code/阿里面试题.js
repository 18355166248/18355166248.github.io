const a = [1, 2, 3];

a.prototype.mutiple = function() {
  a = [...a, 4, 5, 6];
};

const str = "我是${name}, 今年${age}";

const obj = { name: "zke", age: 18 };

function getStr(str, obj) {
  str.replace(/$\{[*.]}/, function(params) {});
}

/**
 *
 * @param {*} api Promise
 */
function useHttp(api, params) {
  const data = [];

  return [data, getList, getListStatus];
}

function api(params) {
  return new Promise((resolve) => {
    resolve(11);
  });
}
// pending, sucess, done
const [data, getData, getDataStatus] = useHttp(api, { a: 1 });

console.log(data, getDataStatus);

useEffect(() => {
  getData();
}, []);

useContext / useReducer;

// 发布-订阅
// A组件更新
// B订阅监听
// hook外面 数据池初始化

const obj = {};

function useHook1(params) {
  const [s, setS] = useState(null);

  return { setS, s, off };
}

const [dispatch, off] = useHook1({ key: "122", cb: () => {} });

dispatch({ flex: true });
