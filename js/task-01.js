const fooFirstTask = () => {
  const categoryRefList = document.querySelector("#categories");
  console.log(`Number of categories: ${categoryRefList.children.length}`);

  [...categoryRefList.children].forEach((element) =>
    console.log(
      `Category: ${element.children[0].innerText}\nElements: ${element.children[1].childElementCount}`
    )
  );
  return;
};

fooFirstTask();