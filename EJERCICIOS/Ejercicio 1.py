print("HELLO WORD")

nom_prd = input("INGRESE EL NOMBRE DEL PRODUCTO: ")
precio_prd = float(input("INGRESE EL PRECIO DEL PRODUCTO: "))
resp = input("ESTA OFERTADO EL PRODUCTO s/n: ")

if resp == 's':
    ofertado = True
    desc_prd = precio_prd * 0.15
else:
    ofertado = False
    desc_prd = precio_prd * 0.00

print("EL DESCUENTO DEL PRODUCTO ES Q.", desc_prd)