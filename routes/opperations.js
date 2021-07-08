const express = require("express");

const router = express.Router();

const Nombres = require("../models/nombres");

router.get("/", async (req, res) => {
  try {
    const nombres = await Nombres.find();
    res.json(nombres);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const nombre = new Nombres({
    value: req.body.value,
  });
  try {
    const savedNumber = await nombre.save();
    res.json(savedNumber);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:numId", async (req, res) => {
  try {
    const deletenum = await Nombres.findOneAndDelete(req.params.numId);
    res.json(deletenum);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/moyenne", async (req, res) => {
  try {
    const numbers = await Nombres.find();
    nums = [];
    total = 0;
    for (const num of numbers) {
      nums.push(num.value);
      total = total + num.value;
    }
    res.json(total / nums.length);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/mediane", async (req, res) => {
  try {
    const numbers = await Nombres.find();
    nums = [];
    for (const num of numbers) {
      nums.push(num.value);
    }
    len = nums.length;
    nums.sort((a, b) => a - b);
    console.log(nums);
    if (len % 2 !== 0) {
      res.json(nums[Math.floor(len / 2)]);
    } else {
      med = nums[Math.floor(len / 2) - 1] + nums[Math.floor(len / 2)];
      med = med / 2;
      res.json(med);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/addition/:num", async (req, res) => {
  const add = +req.params.num;
  try {
    const numbers = await Nombres.find();
    nums = [];
    for (const num of numbers) {
      nums.push(num.value + add);
    }
    res.json(nums);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/multiply/:num", async (req, res) => {
  const add = +req.params.num;
  try {
    const numbers = await Nombres.find();
    nums = [];
    for (const num of numbers) {
      nums.push(num.value * add);
    }
    res.json(nums);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/substract/:num", async (req, res) => {
  const add = +req.params.num;
  try {
    const numbers = await Nombres.find();
    nums = [];
    for (const num of numbers) {
      nums.push(num.value - add);
    }
    res.json(nums);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/divid/:num", async (req, res) => {
  const add = +req.params.num;
  try {
    const numbers = await Nombres.find();
    nums = [];
    for (const num of numbers) {
      nums.push(num.value / add);
    }
    res.json(nums);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
