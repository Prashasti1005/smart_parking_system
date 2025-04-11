from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import uvicorn

app = FastAPI()

# Fake Database
parking_slots = {
    "A1": {"occupied": False, "vehicle": None},
    "A2": {"occupied": False, "vehicle": None},
    "B1": {"occupied": False, "vehicle": None},
    "B2": {"occupied": True, "vehicle": "KA05MJ1234"},
}

class BookingRequest(BaseModel):
    slot_id: str
    vehicle_number: str

# Get Available Slots
@app.get("/slots")
def get_slots():
    return parking_slots

# Book a Slot
@app.post("/book")
def book_slot(req: BookingRequest):
    if parking_slots.get(req.slot_id):
        if not parking_slots[req.slot_id]["occupied"]:
            parking_slots[req.slot_id]["occupied"] = True
            parking_slots[req.slot_id]["vehicle"] = req.vehicle_number
            return {"message": "Slot booked successfully!"}
        else:
            raise HTTPException(status_code=400, detail="Slot already occupied")
    raise HTTPException(status_code=404, detail="Slot not found")

# Free a Slot
@app.post("/free/{slot_id}")
def free_slot(slot_id: str):
    if parking_slots.get(slot_id):
        parking_slots[slot_id]["occupied"] = False
        parking_slots[slot_id]["vehicle"] = None
        return {"message": "Slot is now free!"}
    raise HTTPException(status_code=404, detail="Slot not found")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
