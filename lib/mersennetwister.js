var MT_N = 624;
var MT_M = 397;

var MATRIX_A  = 0x9908b0df;
var UPPER_MASK  = 0x80000000;
var LOWER_MASK  = 0x7fffffff;


// ------------------------------------------------------------------------------------------------
// // 初期化
// // ------------------------------------------------------------------------------------------------
function MersenneTwisterInitialize(seed){
  var a,b,al,ah,bl,bh,cl,ch;

  var mti = MT_N + 1;
  var mt = new Array();

  mt[0] = seed & 0xffffffff;
  for (mti = 1; mti < MT_N ; mti++) {

    a  = 1812433253;
    b  = mt[mti-1] ^ (mt[mti-1] >>> 30);
    al = a & 0xFFFF;
    ah = a >>> 16;
    bl = b & 0xFFFF;
    bh = b >>> 16;
    cl = (al * bl) + mti;
    ch = (cl >>> 16) + ((al * bh) & 0xFFFF)  + ((ah * bl) & 0xFFFF);

    mt[mti] = ((ch << 16) | (cl & 0xFFFF));
    mt[mti] &= 0xffffffff;
  }

  return {
    mti : mti,
    mt : mt
  };
}


// ------------------------------------------------------------------------------------------------
//  -2147483648 ～ 2147483647 までの乱数を取得
// ------------------------------------------------------------------------------------------------
function MersenneTwisterGetInt32(obj){
  var y;
  var mag01 = [0x0, MATRIX_A];

  if (obj.mti >= MT_N) {
    var kk;

    if (obj.mti == MT_N+1)   obj = MersenneTwisterInitialize(5489);

    for (kk = 0 ; kk < MT_N - MT_M ; kk++) {
      y = (obj.mt[kk] & UPPER_MASK) | (obj.mt[kk+1] & LOWER_MASK);
      obj.mt[kk] = obj.mt[kk+MT_M] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    for (;kk < MT_N-1;kk++) {
      y = (obj.mt[kk] & UPPER_MASK) | (obj.mt[kk+1] & LOWER_MASK);
      obj.mt[kk] = obj.mt[kk+(MT_M-MT_N)] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    y = (obj.mt[MT_N-1] & UPPER_MASK) | (obj.mt[0] & LOWER_MASK);
    obj.mt[MT_N-1] = obj.mt[MT_M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

    obj.mti = 0;
  }

  y = obj.mt[obj.mti++];

  y ^= (y >>> 11);
  y ^= (y <<  7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);

  return y;
}

// ------------------------------------------------------------------------------------------------
//  0 ～ 0.999999…までの乱数を取得
// ------------------------------------------------------------------------------------------------
function MersenneTwisterGetFloat(obj){
  var r = MersenneTwisterGetInt32(obj)*(1.0/4294967296.0);
  if(r < 0) r += 1.0;
  return r;
}
