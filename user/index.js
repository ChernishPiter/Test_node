const {Router} = require('express');
const router = Router();

router.get('/',(req, res)=>{
    res.send('Hello router');
});
// Глобальный обработчик ошибок
router.use((err, req, res, next) => {
    console.error("Some err", err);
    res.status(500).json({ message: err.message });
  });

module.exports = router;