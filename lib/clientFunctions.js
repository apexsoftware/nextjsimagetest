import axios from "axios";

export const fetchData = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

export async function postData(url, data) {
  const response = await axios({
    method: "post",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export async function updateData(url, data) {
  const response = await axios({
    method: "put",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export async function deleteData(url, data) {
  const response = await axios({
    method: "delete",
    url,
    data,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

  return response;
}

export function decimalBalance(num) {
  return Math.round(num * 10) / 10;
}

export function getTotalPrice(cartData) {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0
  );
  return Math.round(price * 10) / 10;
}

export function discountPrice(cartData) {
  const price = cartData.items.reduce(
    (accumulator, item) => accumulator + item.qty * item.price,
    0
  );
  const discountPrice =
    Math.round((price - (cartData.coupon.discount / 100) * price) * 10) / 10;
  return discountPrice;
}



export function formField(target) {
  const fields = {};
  for (const x in target) {
    if (Object.hasOwnProperty.call(target, x)) {
      const el = target[x];
      if (el.type !== "file" && el.name.length > 0) {
        fields[el.name] = el.value.trim();
      }
    }
  }
  return fields;
}
