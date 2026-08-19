"""
Prepare a portrait photo for clean ASCII conversion:
  1. remove the background (rembg) so the subject is isolated
  2. boost LOCAL contrast (CLAHE)
  3. composite the subject onto pure white

Output: source-prepped.png (grayscale)

Run:
    python scripts/prep_photo.py <input.jpg> [output.png]
"""

import os
import sys

import cv2
import numpy as np
from PIL import Image
from rembg import remove, new_session

HERE = os.path.dirname(os.path.abspath(__file__))

INP = (
    sys.argv[1]
    if len(sys.argv) > 1
    else os.path.join(HERE, "..", "source-photo.jpg")
)

OUT = (
    sys.argv[2]
    if len(sys.argv) > 2
    else os.path.join(HERE, "..", "source-prepped.png")
)


# ------------------------------------------------------------
# 1. Load image
# ------------------------------------------------------------

img = Image.open(INP).convert("RGBA")

# Prevent huge images from consuming excessive memory.
# 2000x2000 is more than enough for the ASCII conversion.
img.thumbnail((2000, 2000))

print("input size:", img.size)


# ------------------------------------------------------------
# 2. Remove background using CPU
# ------------------------------------------------------------

print("removing background...")

session = new_session(
    "u2net",
    providers=["CPUExecutionProvider"],
)

cut = remove(img, session=session)

rgb = np.array(cut.convert("RGB"))
alpha = np.array(cut.split()[-1])  # 0 = background

print("background removed")


# ------------------------------------------------------------
# 3. Local contrast with CLAHE
# ------------------------------------------------------------

gray = cv2.cvtColor(rgb, cv2.COLOR_RGB2GRAY)

clahe = cv2.createCLAHE(
    clipLimit=2.6,
    tileGridSize=(8, 8),
)

gray = clahe.apply(gray)

# A touch of global lift so the face sits in
# the sparse end of the ASCII ramp.
gray = cv2.convertScaleAbs(
    gray,
    alpha=1.05,
    beta=18,
)


# ------------------------------------------------------------
# 4. Composite onto white
# ------------------------------------------------------------

mask = alpha.astype(np.float32) / 255.0

# Feather the edge slightly to avoid a hard halo.
mask = cv2.GaussianBlur(
    mask,
    (0, 0),
    1.0,
)

out = (
    gray.astype(np.float32) * mask
    + 255.0 * (1.0 - mask)
)

out = np.clip(
    out,
    0,
    255,
).astype(np.uint8)


# ------------------------------------------------------------
# 5. Save
# ------------------------------------------------------------

Image.fromarray(out, mode="L").save(OUT)

print("wrote", OUT, out.shape)