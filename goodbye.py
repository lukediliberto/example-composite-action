
import argparse
import base64
import json

def main(R1_file):
    res = json.loads(base64.b64decode(stringed_bytest_of_json.encode()).decode())
    print(res)
    print("INDEXING!")
    print(res[2]["topping"][3])

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description="a script to do stuff")
    parser.add_argument("R1_file")
    args=parser.parse_args()
    
    main(args.R1_file)
